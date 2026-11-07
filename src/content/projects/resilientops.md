---
title: ResilientOps
tagline: A course-aligned AWS platform project demonstrating secure networking, infrastructure as code, identity controls, monitoring and recovery.
status: In progress. The foundation is applied; the platform is built in stages as the course progresses.
repo: https://github.com/paul7alejo/resilientops-aws-platform
order: 1
stack: [Terraform, Amazon S3, Amazon VPC, IAM, CloudTrail, GuardDuty, AWS Backup, Site-to-Site VPN]
shows: [Secure networking, Infrastructure as code, Identity controls, Monitoring and recovery]
---

## The problem

A small business runs an internal application on a single Ubuntu server. It wants to move the application to AWS without losing control of security, cost or recovery. The project models that migration from start to finish, using synthetic data only, in my own AWS account.

## How it is built

- Every resource is written in Terraform. Nothing is created by clicking in the console.
- Every change goes through `terraform plan`, gets reviewed, and only then is applied.
- Terraform state lives in a dedicated, locked-down S3 bucket rather than on my laptop.
- A monthly budget alert watches cost from the first day.

## Target design

![ResilientOps target architecture: a VPC across two availability zones with public, private application and private data subnets, a load balancer, EC2, RDS and EFS, security and operations services, and a simulated on-premises network connected by Site-to-Site VPN. Only the Terraform state bucket and budget alerts are built so far.](/architecture.svg)

The application runs across two availability zones. Only the load balancer and NAT gateways sit in public subnets; the web servers and the database stay private. A second VPC stands in for the on-premises network and connects over an encrypted Site-to-Site VPN, so the migration can be rehearsed in waves.

## Security decisions

### In place

- **Encrypted, versioned state.** The state bucket has versioning, AES-256 encryption, all public access blocked, and a bucket policy that refuses any request not made over TLS. Old versions expire after 90 days.
- **Cost guardrail.** A monthly budget alerts at 50% and 80% of actual spend and at 100% of forecast spend.
- **Secrets kept out of git.** State files, plan files, variable files and credentials are ignored, and the repository history was scanned before it was made public.
- **Least-privilege network rules.** Security groups are written to allow only the traffic in the documented traffic matrix.

### Planned

- Scoped IAM roles and CloudTrail audit logging.
- Server access through Systems Manager Session Manager, with no open SSH port.
- Encrypted database storage, AWS Backup, and timed restore tests.
- VPC Flow Logs, GuardDuty, Inspector, Config and Secrets Manager.

## What broke

- **A plan file almost reached git.** After the first `terraform plan`, the saved plan file showed up as staged because the ignore rules did not cover plan files. I caught it in `git status` before committing, removed it, and added `tfplan` and `*.tfplan` to `.gitignore`. Plan files can contain sensitive values, so they now never leave my machine.

## Evidence

The repository holds the requirements, business case, network design, traffic matrix, decision records and the Terraform code: [github.com/paul7alejo/resilientops-aws-platform](https://github.com/paul7alejo/resilientops-aws-platform).
