---
title: ! 'Secure your house from COVID-19: Lessons from IT Security'
---

My family lives in New Jersey, just a river across from Manhattan, the epicenter of the New York epidemic. We have been isolating ourselves from the outside world for more than a month now. In this article, I will attempt to explain how we managed to defend ourselves everything so far, using concepts from IT Security.

# Set up a firewall

Early in the days of IT Security, networks had only a few exposed endpoints, so defending the perimeter of your network was actually a feasible option. The way we defended our network perimeter was using firewalls with few open ports.

In our home, we also had few exposed endpoints (windows, doors). We quickly locked down the unnecessary exposed endpoint (windows), and the door was similarly locked until data (food, toys, etc.) needed to travel in through that port. We knew when data was going to travel in, because we had notifications from our apartment concierge when packages came in, or when I made plans to go out and buy groceries, so that was the only time we needed to open the (door) port.

# Log and audit all traffic

Since there was only 1 open port (door), we were able to heavily scrutinize the incoming traffic (food, toys, etc.) for vulnerabilities (the virus). All incoming traffic was logged (looked through) and audited (wiped clean) by my wife before they were allowed to be used inside the house. Yes, even the food! We wiped down even the containers that the food came in.


# Maintain a DMZ (Demilitarized Zone)

A DMZ is an area owned by the network, but outside of the firewall. In IT Security, assets in the DMZ are considered owned but unsafe.

In our house, we designated an area of the floor right inside of our door as the DMZ. Our children (internal network assets) are told not to move close to the area or interact with things in it (owned but unsafe!). When I come home with groceries or packages, I will put them down in the DMZ so they can be logged and audited (see above section) before bringing the items (data) in-house.

Since we don't need the DMZ to be there all the time, but only when I go out of the house, we clean the floor as soon as all items have been cleared from the DMZ, which returns the DMZ area back to a "safe", non-DMZ asset that we can use (walk around in).

# Zero Trust

As IT Security evolved, we came up with a concept called "Zero Trust" in authentication and authorization. The idea is simple, we need to trust nothing coming in from outside our network, and even within our owned assets, we need to verify before trusting anything.

How does that translate to securing our house? Well, even after implementing the 3 concepts above, there is still one major vulnerability: Me! I am a "safe asset" before I leave the house to do grocery runs or receive packages, but as soon as I step outside, there should be "Zero Trust" when I return to the "safe network". So, whenever I come home, as soon as the required items (data) have been deposited in the DMZ, I proceed to take a bath (regain trust). Only after that am I considered a safe asset again, free to roam inside the house.

# Assume Breached

As security evolved, large companies have gotten so many endpoints in them that the good'ol solution of locking down everything has become impossible. Instead, these companies now implement a stance in their systems known as "Assume Breached". The name is self-descriptive of the concept: Assume that no matter how well you've defended your perimeter, attackers have somehow already gained entry. Given this assumption, the only way to continue protecting yourself is to implement defense-in-depth: Protect and monitor even your internal assets.

In our house, we also implement "Assume Breached". Since infections can take up to 14 days for anyone in the family to show symptoms, but I need to head out about once a week to replenish our supplies, we need to assume that in any of our previous excursions outside, no matter how well defended, that we could have been "breached" by the virus. Every time we cough, or have a mild temperature, or if our children act up, we increase monitoring of the person until we show that it was a false alarm.  Which it mostly is! But considering the cost of impact (infection), our family decided to err on the side of detecting more false positives than to let a false negative slide.

# What have we learned?

IT security as a domain came a lot after physical security. Many concepts, like defending the perimeter, originated in the physical world. What I've done is to bring these concepts full circle, from IT back into the physical world (my home), again.

In IT security just as in my home, if there was no observable breach, it can be due to 1 of 3 possibilities:
- The attack didn't come (we didn't contract the virus even when going out).
- The attack was succesfully repelled (we had the virus come into the house briefly, but was cleaned out before it could infect anyone).
- The attack was successful, but we didn't detect it (we were asymptomatic infections).

Even with all the protections in place, in the end, the only thing IT security teams (and I) can do is hope that it all works.

Only time will tell.
