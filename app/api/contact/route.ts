import { google } from "googleapis";
import { createPrivateKey } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, design, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const base64 = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;

    if (!spreadsheetId) {
      console.error("GOOGLE_SHEET_ID is missing");

      return NextResponse.json(
        { error: "GOOGLE_SHEET_ID is missing" },
        { status: 500 }
      );
    }

    if (!base64) {
      console.error("GOOGLE_SERVICE_ACCOUNT_BASE64 is missing");

      return NextResponse.json(
        { error: "GOOGLE_SERVICE_ACCOUNT_BASE64 is missing" },
        { status: 500 }
      );
    }

    // Decode the Google service account JSON
    const jsonString = Buffer.from(base64, "base64").toString("utf8");

    let credentials;

    try {
      credentials = JSON.parse(jsonString);
    } catch {
      console.error("Could not parse Google service account JSON");

      return NextResponse.json(
        { error: "Invalid Google service account JSON" },
        { status: 500 }
      );
    }

    const clientEmail = credentials.client_email;
    const privateKey = credentials.private_key;

    console.log("Google credentials check:", {
      clientEmail: clientEmail ? "FOUND" : "MISSING",
      privateKey: privateKey ? "FOUND" : "MISSING",
      privateKeyStart: privateKey
        ? privateKey.substring(0, 30)
        : "MISSING",
      privateKeyEnd: privateKey
        ? privateKey.substring(privateKey.length - 30)
        : "MISSING",
    });

    if (!clientEmail || !privateKey) {
      return NextResponse.json(
        {
          error: "Google service account credentials are incomplete",
        },
        { status: 500 }
      );
    }

    // Normalize the private key
    const formattedPrivateKey = privateKey
      .replace(/\\n/g, "\n")
      .replace(/\r\n/g, "\n")
      .trim();

    console.log("Private key format:", {
      startsCorrectly:
        formattedPrivateKey.startsWith(
          "-----BEGIN PRIVATE KEY-----"
        ),

      endsCorrectly:
        formattedPrivateKey.endsWith(
          "-----END PRIVATE KEY-----"
        ),

      length: formattedPrivateKey.length,
    });

    // Test the private key BEFORE contacting Google
    try {
      createPrivateKey({
        key: formattedPrivateKey,
        format: "pem",
        type: "pkcs8",
      });

      console.log("PRIVATE KEY TEST: SUCCESS");
    } catch (keyError) {
      console.error("PRIVATE KEY TEST: FAILED", keyError);

      return NextResponse.json(
        {
          error:
            "Google private key is invalid. Generate a new service account key.",
        },
        { status: 500 }
      );
    }

    // Google authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: formattedPrivateKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // Save to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            design || "",
            message,
          ],
        ],
      },
    });

    console.log("MESSAGE SAVED TO GOOGLE SHEETS");

    return NextResponse.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error: any) {
    console.error("GOOGLE SHEETS ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Failed to save message",
      },
      { status: 500 }
    );
  }
}