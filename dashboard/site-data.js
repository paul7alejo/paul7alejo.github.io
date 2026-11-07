// Edit this file to update the page. No build step, no secrets, nothing here is private.
window.SITE = {
  name: "Paul",
  github: "https://github.com/paul7alejo",
  updated: "2026-11-07",
  exam: { name: "AWS Solutions Architect Associate (SAA-C03)", date: "2026-12-25T17:30:00+13:00", label: "Fri 25 Dec 2026, 17:30 NZ" },

  // The route: each hop is a real step in the career path, in order.
  hops: [
    { host: "network-engineering", note: "Infrastructure and network engineer, CCNA", status: "reached" },
    { host: "aws-foundations", note: "Cloud Practitioner, AI Practitioner", status: "reached" },
    { host: "aws-solutions-architect", note: "SAA-C03 exam on 25 Dec 2026", status: "progress" },
    { host: "terraform-and-resilientops", note: "VPC design and Terraform, in progress", status: "progress" },
    { host: "ci-cd-and-operations", note: "Pipelines, monitoring, rollback and recovery", status: "next" },
    { host: "cloud-engineer", note: "Cloud or platform engineering role", status: "destination" }
  ],

  projects: [
    {
      name: "ResilientOps on AWS",
      stack: "Terraform, VPC, subnets, security groups",
      state: "In progress",
      evidence: "Requirements, network design and traffic matrix documented. VPC, public and private subnets, routing and least-privilege security groups written in Terraform.",
      url: ""
    },
    {
      name: "Self-hosted habit tracker on AWS",
      stack: "Terraform, EC2 on Graviton, Caddy with automatic HTTPS, S3 backups, Systems Manager, scoped IAM, AWS Budgets",
      state: "Deployed, then torn down on purpose",
      evidence: "Ran on AWS in Sydney with no open SSH port. Removed to save cost: terraform destroy deleted all 25 resources.",
      url: ""
    }
  ],

  now: [
    { label: "Studying", text: "Cantrill SAA-C03 course, restart pass with daily practice questions" },
    { label: "Building", text: "ResilientOps network lab in Terraform, one new piece each Sunday" },
    { label: "Next", text: "Remote Terraform state, then compute and load balancing" }
  ]
};
