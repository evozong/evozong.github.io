---
title: Creating Bug Reports
---

Bugs are a fact of software.
When filing a bug report, 

# Example of a bug report

Tickets usually have 2 main portions: The title and a free-form description text-box. We'll use this format to write a minimal good bug report.

> **Title:** Customer X cannot do Y when Z
>
> **Description:**
>
> Repro Steps:
> 1. Navigate to this page
> 2. Click on the button
>
> Expected: Dialog appears that allows customers to do Y
>
> Actual: No dialog appears
>
> More information: You can also do Y by going to this other page, and it works on that page.

## Explanation
1. The title should be short but clearly explain about the impact. From the title alone, I was able to read the Who (Customer X), the What (Do Y), the When/How (Z scenario). When doing sprint planning, you're usually only able to see just the ticket titles. A clear title can help you understand the severity and prioritization of the bug. A bad title forces you to dive into the description to understand more before you can prioritize it.
2. The "Repro Steps" should clearly outline the steps needed to reproduce the bug (repro means reproduction). This is useful for a number of reasons:
	
	1. The engineer working on this bug can reproduce this bug by following specific instructions.
	1. The engineer picking this up doesn't have to come back to you to ask for more information. Worse, if you don't remember how to reproduce the bug because it's been 6 months since you created the bug.
	1. Sometimes bugs are duplicated. If the steps cannot reproduce the bug, it is likely that the bug was already fixed. Alternatively, the steps were not specific enough and there was something missing in the instructions in order to trigger the bug. If we don't have repro steps, it is hard to determine whether we have fixed it or we forgot how to trigger it.
	
	Repro steps need to be as detailed as possible.
3. "Expected" explains the behavior that the customers expect. Sometimes, this is the issue, because the customers' expectations may be misaligned with the specs. If we don't know the expected behavior is, we don't know how to fix the problem.
4. "Actual" explains the behavior currently observed. If the behavior after executing the repro steps is not the same as the "Actual" behavior, it could mean that something else in the system changed between when the bug was filed to when the bug was picked up for investigation. It could also mean that the engineer was not executing the repro steps correctly.
5. "More information" is used to add more context to the bug. This can be empty in simple bugs, or it can sometimes outline other ways to reproduce the bug, or anything else that the bug reporter thinks is helpful to the investigator to help solve the problem.
