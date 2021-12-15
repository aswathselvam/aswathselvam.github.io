---
layout: splash
classes:
  - landing
title: Projects
permalink: /projects/

feature_row:
  - image_path: /assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
  - image_path: /assets/images/unsplash-gallery-image-3-th.jpg
    title: "Placeholder 3"
    excerpt: "This is some sample content that goes here with **Markdown** formatting." 
---


# Swarm Robots
Multiple agents push a large object. Each agent plans a path to the destination using RRT* algorithm.

Project github page [link](https://github.com/aswathselvam/swarm_robots)

# OmniDirectinal Robot with UR5 Arm
Overview:
1. A 6DOF arm can manipulate objects in SO3(any position x,y,z or roll,pitch,yaw angles) space, however, one constraint remains, the arm's reachability.
2. OmniDirectional wheeled mobile robots are free to move in the XY plane in any direction, allowing more freedom of movement than Non-Holonomic Car like robots. 

Combine these two ideas, we get a high DOF arm + infinite reachability in XY plane. 
 To name a couple of examples, these robots can be used in warehouse operations and perform agricultural tasks.   

Technical details: 
1. For Arm: Calculation of inverse kinematic for the arm using Pseudo-Inverse Jacibian.
2. For base: Calculation of angular velocity of motors by inverting Forward Transformation from base frame to wheel frame. Then using PID for feedback control using errors in position. 

<iframe width="500" height="350" src="https://www.youtube.com/embed/qoDo5TzVyWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Project github page [link](https://github.com/aswathselvam/enpm662_final_project)

# Inverse Kinematics of Robotic Arm
Inverse kinematics for a 6-DOF Robotic arm is calcuated by taking Jacobian Pseudo-Inverse of the Forward Transformation of each arm joints. 

Project github page [link](https://github.com/aswathselvam/AcmeRoboticsPathPlanner)

# Ground plane segmentation
Using an RGB image of dimension 128x128 to predict the free space on the ground for a wheeled mobile robot to navigate its environment.

**With Neural Network:**
Running customized [Unet](https://arxiv.org/abs/1505.04597) on prepared dataset gave 7ms Inference time.


**With Classical vision:**
1. Sample points near the robot and Segment the image.
2. Perform Optical flow to track the points in sucessive frames.
3. Compute Homography.
4. Filter out points that are not obeying the Homography Transform of the points closer to the robot.
5. Remove Segments which has less density of points.

2ms inference time, video below:
<iframe width="500" height="350" src="https://www.youtube.com/embed/aQgTL-L6xbQ?list=PLRlckhzuFOGdQHNsBCSsne9apPbGX_QKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
