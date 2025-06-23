export default async function handler(req, res) {
  const fileUrl = 'https://madycloud.vercel.app/Resume.pdf';

  try {
    const response = await fetch(fileUrl);
    const buffer = await response.arrayBuffer();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Mohammed_Shoaib_Resume.pdf"');
    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).send('Failed to fetch resume.');
  }
}
