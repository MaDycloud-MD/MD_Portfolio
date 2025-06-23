// pages/api/download-resume.js
export default async function handler(req, res) {
  res.setHeader('Content-Disposition', 'attachment; filename=Resume.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  const file = await fetch('https://madycloud.vercel.app/Resume.pdf');
  const buffer = await file.arrayBuffer();

  res.status(200).send(Buffer.from(buffer));
}
