// Edit this file to update the page. No build step, no secrets, nothing here is private.
window.SITE = {
  name: "Paul",
  github: "https://github.com/paul7alejo",
  updated: "2026-11-08",
  exam: { name: "AWS Solutions Architect Associate (SAA-C03)", date: "2026-12-25T17:30:00+13:00", label: "Fri 25 Dec 2026, 17:30 NZ" },

  // The route: each hop is a real step in the career path, in order.
  hops: [
    { host: "network-engineering", note: "Infrastructure and network engineer, CCNA", status: "reached" },
    { host: "aws-foundations", note: "Cloud Practitioner, AI Practitioner", status: "reached" },
    { host: "aws-solutions-architect", note: "SAA-C03 exam on 25 Dec 2026", status: "progress" },
    { host: "terraform-and-resilientops", note: "Secure AWS foundation, built a week at a time", status: "progress" },
    { host: "devsecops-pipeline", note: "Security scanning and OIDC-based CI/CD", status: "next" },
    { host: "detection-and-response", note: "Logging, detection, remediation and restore tests", status: "next" },
    { host: "cloud-security-engineer", note: "The role I am building toward", status: "destination" }
  ],

  // Security controls in ResilientOps. built = applied or written; planned = the Sunday it gets built.
  controls: [
    { name: "Encrypted, versioned Terraform state", detail: "S3 state bucket with versioning, AES-256 encryption, public access blocked and a TLS-only policy.", status: "built", when: "Built 8 Nov" },
    { name: "Cost guardrail", detail: "Monthly budget with alerts at 50% and 80% actual spend and 100% forecast.", status: "built", when: "Built 8 Nov" },
    { name: "Secrets kept out of git", detail: "State, plans and credentials ignored. Full history scanned clean before the repo went public.", status: "built", when: "Built 8 Nov" },
    { name: "Least-privilege network rules", detail: "VPC, subnets and security groups in Terraform that allow only the traffic the design needs.", status: "built", when: "Lab written" },
    { name: "Least-privilege IAM and audit logging", detail: "Scoped roles and CloudTrail so every API call is recorded.", status: "planned", when: "Sun 15 Nov" },
    { name: "Private subnets and private storage", detail: "Two availability zones, private S3 bucket, no public data tier.", status: "planned", when: "Sun 22 Nov" },
    { name: "Server access without SSH", detail: "Systems Manager Session Manager instead of an open SSH port.", status: "planned", when: "Sun 29 Nov" },
    { name: "Encrypted database and backups", detail: "RDS migration with AWS Backup and a restore I time myself.", status: "planned", when: "Sun 6 Dec" },
    { name: "Network visibility", detail: "Load balancer, Auto Scaling and VPC Flow Logs into CloudWatch.", status: "planned", when: "Sun 13 Dec" },
    { name: "Detection and secrets handling", detail: "GuardDuty, Inspector, Config and Secrets Manager.", status: "planned", when: "Sun 20 Dec" },
    { name: "Encrypted hybrid link", detail: "Site-to-Site VPN from a simulated on-premises network, then migration waves.", status: "planned", when: "Sun 26 and 27 Dec" }
  ],

  projects: [
    {
      name: "ResilientOps",
      tagline: "A small business moves an internal Ubuntu application to AWS, with security and recovery designed in.",
      stack: "Terraform, S3, VPC, IAM, CloudTrail, GuardDuty, AWS Backup, Site-to-Site VPN",
      state: "In progress. Remote state and budget alerts are applied; the rest follows weekly.",
      evidence: "Synthetic data only. Every change is planned, reviewed and applied from code. Requirements, network design and a traffic matrix are documented in the repository.",
      url: "https://github.com/paul7alejo/resilientops-aws-platform",
      diagram: "https://github.com/paul7alejo/resilientops-aws-platform/blob/main/docs/architecture.md"
    }
  ],

  now: [
    { label: "Studying", text: "James Lee's SAA-C03 course, every lesson, with daily practice questions" },
    { label: "Building", text: "ResilientOps in Terraform, one new piece each Sunday" },
    { label: "Next", text: "Least-privilege IAM and CloudTrail audit logging on Sun 15 Nov" }
  ]
};
