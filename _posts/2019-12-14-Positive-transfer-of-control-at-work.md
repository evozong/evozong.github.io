---
---

[Positive Transfer of Control](https://www.aopa.org/training-and-safety/air-safety-institute/accident-analysis/featured-accidents/epilot-asf-accident-reports-your-airplane){:target="_blank"} is an aviation procedure used to guarantee that at any point in time, all pilots in the cockpit know who is in control of the plane. The procedure, as [described by the FAA Training Material](https://www.faasafety.gov/gslac/ALC/course_content.aspx?cID=36&sID=196){:target="_blank"}, is as follows:

> When a flight instructor wishes the student to take control of the aircraft, he/she should say to the student, “You have the flight controls.” The student should acknowledge immediately by saying, “I have the flight controls.” The flight instructor confirms by again saying, “You have the flight controls.” Part of the procedure should be a visual check to ensure that the other person actually has the flight controls.

> When returning the controls to the flight instructor, the student should follow the same procedure the instructor used when giving control to the student. The student should stay on the controls until the instructor says, “I have the flight controls.” There should never be any doubt as to who is flying the airplane at any one time.

Does this remind you of something very familiar in Computer Networking? Yes, the [TCP 3-way handshake](https://en.wikipedia.org/wiki/Handshaking#TCP_three-way_handshake){:target="_blank"} is an example of Positive Transfer of Control. **The basic principle of this procedure is: "If you hear something new, acknowledge it."**

So how does this help us at work?

Software engineering relies very much on teamwork, which means sometimes we have to transfer work to another person, and take it back when they are done. Positive Transfer of Control ensures that we do handovers properly, so at any point, everyone knows who owns a task. For example,

> **Software Engineer (SE)**: "Hey, I've finished up Feature X, can you help me test it?"

> **Quality Engineer (QE)**: "Yes, I will test Feature X tomorrow."

> **SE**: "OK, you will test Feature X tomorrow."

It doesn't have to be this formal, but this conversation served its purpose for handover:

1. SE has communicated his desire to hand off Feature X to QE.
2. This is new information to the QE. QE acknowledges by repeating the request details to ensure he heard it right. He also gives a promise to follow-up with a time frame.
3. QE's acknowledgement is new information. That he has agreed to follow up with a time-frame is also new information. SE replies by repeating these details back to QE to communicate that he has heard it.

If Step 2 and 3 were missing, the SE does not know if QE has heard or acknowledged the handover. If Steps 1 and 2 were done but Step 3 was missing, the QE doesn't know if SE has heard his acknowledgement, so there still hasn't been a positive handover.

Using positive handover techniques can help reduce the amount of "I didn't know I was supposed to do it" or "I thought he was supposed to work on it" issues in the team. The beauty of this technique is that even if others don't use it, you can still use it by yourself to ensure positive handover.
