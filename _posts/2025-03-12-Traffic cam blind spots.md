---
layout: post
title: Mapping Traffic Camera Blind Spots Near Imperial College London
date: 2025-03-11
description: Using open data, I visualized traffic camera blind spots in Kensington, exploring urban surveillance coverage.
giscus_comments: false
related_posts: false
toc:
  sidebar: left
---

## The Idea  

A while ago, I was watching *The Capture*—a BBC series (IMDB 8/10) about surveillance and digital manipulation. At one point, a character pulls up a map of CCTV blind spots in London. That got me thinking: how hard would it be to map those gaps myself?  

London has one of the most extensive CCTV networks in the world, with traffic cameras monitoring key roads and junctions. For most cameras, you can’t get their exact location. However, TfL has jam cameras.  

I started looking into it and found a website visualizing [TfL’s traffic cameras](https://www.tfljamcams.net/), which displayed locations and live feeds across the city. However, the live feed was shut down in September 2024 after a cyberattack ([TfL statement](https://tfl.gov.uk/campaign/cyber-security-incident)). Yeah. The feeds were gone, but the backend was still accessible, and I could retrieve the camera locations from the JSON file.

## Steps Taken:

1. **Camera Locations**: Extracted from JSON data.
2. **Building Data**: Collected via OpenStreetMap to identify obstacles (Google Maps makes you pay).
3. **Visibility Calculation**: Modeled camera’s field of view around South Ken, limiting range to 200m.
4. **Blind Spot Identification**: Areas blocked by buildings or outside the camera’s range were classified as blind spots.
5. **Visualization**: Used Folium to create an interactive map.

## Visualisation of the location of Jam Cams

The locations of all TfL traffic cameras in London are visible here:
<link href="https://github.com/lukasschirren/jamcam-blind-spot/blob/main/maps/camera_map.html" rel="import" />

## Visualisation of camera covera  
The final result is an interactive map of traffic camera coverage in Kensington. Cameras are shown as black dots, blue areas indicate visibility, and gray zones represent blind spots.  

<iframe src="kensington_blind_spot_map.html"
        width="100%" height="600" style="border: none;"></iframe>  

If the embed doesn’t load, you can view it directly [here](https://lukasschirren.github.io/jamcam-blind-spot/kensington_blind_spot_map.html).  

---

## Code

The full implementation is available on GitHub:  

📍 [GitHub: jamcam-blind-spot](https://github.com/lukasschirren/jamcam-blind-spot)  
