// Edit this file to update site-wide details. Nothing here is private.
export const site = {
  name: 'Paul Alejo',
  github: 'https://github.com/paul7alejo',
  linkedin: '', // paste your LinkedIn profile URL here and the buttons appear
  exam: { name: 'AWS Solutions Architect Associate', date: '2026-12-25T17:30:00+13:00', label: '25 December 2026' },
  now: [
    { label: 'Studying', text: "AWS Solutions Architect Associate, James Lee's course" },
    { label: 'Building', text: 'ResilientOps with Terraform' },
    { label: 'Next', text: 'AWS cloud engineering, followed by cloud security' },
  ],
  description:
    'Network engineer building secure AWS systems. Documenting my move into AWS cloud engineering through hands-on infrastructure, Terraform automation and security-focused projects.',
};

export const fmtDate = (d: Date) => d.toISOString().slice(0, 10);

export const byNewest = (a: any, b: any) =>
  b.data.date.getTime() - a.data.date.getTime() || b.data.seq - a.data.seq;
