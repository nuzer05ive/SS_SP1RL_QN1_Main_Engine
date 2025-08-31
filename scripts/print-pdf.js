const { chromium } = require("@playwright/test");
const fs = require("fs");
(async () => {
  const url = process.env.PAPER_URL || "http://localhost:3000/docs/paper";
  const out = "out/paper.pdf";
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.pdf({
    path: out,
    format: "Letter",
    printBackground: true,
    margin: { top: "10mm", right: "10mm", bottom: "15mm", left: "10mm" },
  });
  await browser.close();
  if (!fs.existsSync(out) || fs.statSync(out).size < 20 * 1024) {
    console.error("paper.pdf too small or missing");
    process.exit(1);
  }
  console.log("✅ Wrote", out);
})();
