---
layout:       work
collection:   work
type:         "App"
title:        "Medeo"
summary:      "The Medeo platform allows healthcare providers the ability to offer secure messaging, file transfers, online booking and video visits for patients ..."
headline:     "I helped build Medeo, an app that saves you in-person trips to the Doctor's"
hero:         medeo-desktop.jpg
project_link: https://medeohealth.com
tags:
- Design
- Development
- QA
---

Nobody likes going to the Doctor's.

In 2013, a stacked team of digital entrepreneurs and innovators joined together to bring back the house call. Our goal was to enable patients to receive help from healthcare practitioners solely online.

#### Secure Video Calls

Videoconferencing was at the heart of Medeo. Originally, we created Medeo using Vidyo. This was the same technology Google Hangouts used to power it's service. We realized it had some large downsides, namely the patients and practitioners needed to install Vidyo to use it. To sidestep this problem we built an encrypted, in-browser [WebRTC](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) solution allowing anyone with the latest Chrome or Firefox browsers to instantly see their Doctor right in the browser, without having to install anything extra.

#### Instant Communication

We realized coordinators would be necessary to act as the middlemen between patients and practitioners. When a patient came on Medeo to see a Doctor, the coordinators would triage the patient to see if they were fit for one of our telemedecine visits.

Coordinators needed to be updated in realtime, so we created an encrypted [pubsub system](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) (using a ruby lib called Faye) and a modern JavaScript app to handle the communication.

<img src="{% asset_path 'medeo-app1.jpg' %}" class="img-responsive" alt="Medeo app">

#### Online Prescriptions

If patients didn't have the time in their schedule, or if they were not easily mobile a prescription could be sent ahead to a pharmacy and delivered straight to their door.

#### Acquisition

Medeo was purchased by QHR Technologies, which in turn was acquired by Loblaws Companies Ltd.

If you're feeling sick, or you'd simply like to try Medeo's online telemedicine system it has been [rebranded as EQVirtual](https://eqvirtual.com/british-columbia/en/).

