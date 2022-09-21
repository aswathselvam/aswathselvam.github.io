---
layout: splash
classes:
  - landing
title: Projects
permalink: /projects/

sidebar:
  nav: "projects-list"

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
    excerpt: "This is some sample content that goes here with **Markdown** formatting.
    An Android mobile phone's accelerometer and Gyroscope data is used to detect potholes in realtime.
![Image](https://user-images.githubusercontent.com/7314342/84470416-f26a0280-aca0-11ea-8fc1-d0a50099a787.png)
Project github page [link](https://github.com/aswathselvam/Potholes)

    " 

gallery:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
  - url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
  - url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: assets/images/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 3"
---

<style>
* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 1%;
  /* height: 700px; */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<!---
Color Palatte
Aqua: 
Background: #f0fff0
UI: #1976d2
Text: #0f477e

Air: 
Background: #eeeeee
UI: #0092ca
Text: #2c2a3a

Mint:
Background: #f3f6f6
UI: #11999e
Text: #425150
Footer: #30e3ca

Contrast:
Background: #ffffff
UI: #ff0000
Text, Footer: #010101
-->


## Self Driving Vehicle Navigating A Dynamic Environment

**Overview:**
1. Predict the trajectory of a Self-Driving vehicle, given a Birds eye view of the traffic scene.
2. Used Lyft's perdiction dataset and L5Kit's Jupyter notebooks template.

**Technical approach:**
1. Leveraging Attention mechanism of Vision Transformer and an Fully connected layer to predict the trajectory of a Self Driving Vehicle.

<iframe width="500" height="350" src="https://www.youtube.com/embed/fpV1gaZ-MUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Project GitHub page [link](https://github.com/aswathselvam/ENPM-690/tree/master/Final_Project) \
Report [link](https://github.com/aswathselvam/ENPM-690/blob/master/Final_Project/docs/ENPM690_Report.pdf)

<hr>


<div class="row">
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <h1><center> Dijsktra Path Planning
  </center></h1>
  ![Image](https://github.com/aswathselvam/ENPM-661/raw/master/Project2/simulation_video.gif)

  Project GitHub page [link](https://github.com/aswathselvam/ENPM-661/tree/master/Project2)


  </div>
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <h1><center> A* Path Planning </center></h1>

  ![Image](/assets/images/a_star.gif)

  Project GitHub page [link](https://github.com/h-gokul/robot-planning/tree/main/Astar)

  </div>
</div>

<hr>

## RRT CUDA
**Overview**
1. Parallize obstacle check with cuda kernels.
Result: Ability to add more obstacle nodes than CPU version.

<div class="row">
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <img src="https://user-images.githubusercontent.com/7314342/154130227-4f0e9850-eda1-4ef3-a0a8-092c19ffdfec.gif" alt="drawing" style="width:600px;"/>
  </div>
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <img src="https://user-images.githubusercontent.com/7314342/153663525-cd496061-b493-440a-a8f1-6afcde2d3ace.gif" alt="drawing" style="width:600px;"/>
  </div>
</div>

Project GitHub page [link](https://github.com/aswathselvam/Path-Planning)

<hr>


# Human Pose Estimation and Forecasting:
**Overview**: 
1. Improved accuracy from SOTA Poseformer architecture by using various loss functions for Human Pose estimation. 
2. DA-STS-GCN(Domain Adaptive Space Time Separable Graph Convolutional Network) for Human Pose forecasting. 
3. Trained the networks on Human 3.6M dataset.
<div class="row">
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <img src="/assets/images/pose_estimation.png" alt="drawing" style="width:600px;"/>
  </div>
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <img src="/assets/images/human_viz.gif" alt="drawing" style="width:550px;"/>
  </div>
</div>
Report: [link](https://drive.google.com/file/d/1ev7CmSVooBv3sQ7oYpS1uv-AZE6Tynlq/view)

<hr>

# Planning of Panda Robotic Arm using MoveIt. 
**Overview:**
1. Move arm from start location to goal location.
2. Used Action server to control gripper.
3. Simulated in Gazebo and visualized the planner trajectory in Rviz.

<iframe width="1463" height="563" src="https://www.youtube.com/embed/xSSkAvAXIlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Project GitHub page [link](https://github.com/aswathselvam/ENPM-661/tree/master/Project4)


<hr>


<div class="row">
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <h1><center> Curve Fitting </center></h1>
  ![Image](https://github.com/aswathselvam/ENPM-673/raw/master/Homework1/Q2/output.png)

  Project GitHub page [link](https://github.com/aswathselvam/ENPM-673/tree/master/Homework1/Q2)


  </div>
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <h1><center> AR Cube Projection </center></h1>

  <iframe width="1463" height="563" src="https://www.youtube.com/embed/Fvx0soFXT98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  Project GitHub page [link](https://github.com/aswathselvam/ENPM-673/tree/master/Project1)

  </div>
</div>

<div class="row">
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <h1><center> KNN Segmentation </center></h1>
  
  <img src="/assets/images/knn.jpg" alt="drawing" style="width:600px;"/>

  Project GitHub page [link](https://github.com/aswathselvam/ENPM-673/tree/master/MidTerm)


  </div>
  <div class="column" style="background-color:#f0fff0;" markdown="1">
  <h1><center> Depth from 2 given Images </center></h1>

  ![Image](https://github.com/aswathselvam/ENPM-673/raw/master/Project3/outputs/disparity_image_heat_curule.png)

  Project GitHub page [link](https://github.com/aswathselvam/ENPM-673/tree/master/Project3)

  </div>
</div>

<hr>

# Lane detection:
<iframe width="1465" height="502" src="https://www.youtube.com/embed/fkf3r3iCl74" title="Straight Lane detection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Project GitHub page [link](https://github.com/aswathselvam/ENPM-673/blob/master/Project2/code/lanepredictor.py)

<hr>

# OmniDirectinal Robot with UR5 Arm
**Overview:**
1. A 6DOF arm can manipulate objects in SE3(translation + rotation) space, however, one constraint remains, the arm's reachability.
2. OmniDirectional wheeled mobile robots are free to move in the XY plane in any direction, allowing more freedom of movement than Non-Holonomic Car like robots. 

Combine these two ideas, we get a high DOF arm + infinite reachability in XY plane. 
To name a couple of examples, these robots can be used in warehouse operations and perform agricultural tasks.   

**Technical approach:**
1. For Arm: Calculation of inverse kinematic for the arm using Pseudo-Inverse Jacobian.
2. For Robot base: Calculation of angular velocity of motors by inverting Forward Transformation from base frame to wheel frame. Then using PID for feedback control using errors in position. 

<iframe width="500" height="350" src="https://www.youtube.com/embed/qoDo5TzVyWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Project GitHub page [link](https://github.com/aswathselvam/enpm662_final_project)

<hr>


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


<div class="row">
  <div class="column" style="background-color:#f0fff0;" markdown="1">
<h1><center> Swarm Robots</center></h1>
<iframe width="500" height="350" src="https://www.youtube.com/embed/7a76u_0sosA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Project GitHub page [link](https://github.com/aswathselvam/swarm_robots)

Multiple agents push a large object. Each agent plans a path to the destination using RRT* algorithm.

  </div>

  <div class="column" style="background-color:#f0fff0;" markdown="1">
    
<h1><center> Inverse Kinematics of UR5 Arm </center></h1>

<iframe width="500" height="350" src="https://www.youtube.com/embed/_j-51JeMeYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Project GitHub page [link](https://github.com/aswathselvam/AcmeRoboticsPathPlanner)

Inverse kinematics for a 6-DOF Robotic arm is calcuated by taking Jacobian Pseudo-Inverse of the Forward Transformation of each arm joints. Implemented with Coppelia-Sim simulation software.

  </div>
</div>

# Realtime pothole Detection
An Android mobile phone's accelerometer and Gyroscope data is used to detect potholes in realtime.
![Image](https://user-images.githubusercontent.com/7314342/84470416-f26a0280-aca0-11ea-8fc1-d0a50099a787.png) \
Project GitHub page [link](https://github.com/aswathselvam/Potholes)

<!-- 
TODO:
https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/docs/_pages/portfolio-archive.md
https://mmistakes.github.io/minimal-mistakes/portfolio/
-->
<!-- {% include feature_row caption="This is a sample gallery to go along with this case study." %} -->
