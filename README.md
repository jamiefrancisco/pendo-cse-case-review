# Pendo CSE Feature Adoption Investigation

This project simulates a realistic Customer Success Engineer (CSE) scenario at Pendo:  
a customer believes feature adoption is low, but the issue turns out to be how the feature is being tracked — not how it’s being used.

The goal of this project is to demonstrate how I approach:
- diagnosing product analytics issues
- separating instrumentation problems from real usage problems
- explaining findings clearly to customers
- documenting learnings internally for future cases

---

## Scenario

A customer launched a **Create Workflow** feature and is measuring adoption using a completion event.

They report:
> “Adoption looks much lower than expected after launch.”

---

## What’s included

This project is split into two parts:

### 1. Customer app (Lovable)
A small demo app built with Lovable that represents the customer’s product.

- Users can log in as **Admin** or **Member**
- Both roles can complete the Create Workflow flow
- **Tracking issue:** the `Workflow Completed` event fires only for Admin users

This creates a realistic situation where:
- the feature is being used
- but adoption metrics underreport real usage

### 2. CSE investigation tool (this repo)
A lightweight internal tool that walks through how I’d investigate and resolve the issue.

Pages include:
- **Overview** — customer context and risk
- **Investigation** — what I checked, what I found, and why
- **Customer Response** — how I’d explain the issue and next steps to the customer
- **Internal Notes** — root cause, resolution, and a playbook for future cases

---

## Why this matters for a CSE role

In practice, many “low adoption” issues come from:
- incomplete event definitions
- role-based interactions
- late-stage tracking
- mismatched expectations about what metrics represent

This project focuses on how a CSE adds value by:
- identifying those gaps quickly
- preventing unnecessary escalations
- restoring customer trust in the data

---

## How to run locally

```bash
npm install
npm run dev
# pendo-cse-case-review
