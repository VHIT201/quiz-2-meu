// app/api/submit/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();

    const googleScriptURL = "https://script.google.com/macros/s/AKfycbxGUfeuCKDXq5czA_DW2SbGv_yd4vvT2Exz74Bwohhp0Z5mMo16704ZH5v1Lww7ZVfT/exec";

    await axios.post(googleScriptURL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gửi Google Sheet thất bại:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
