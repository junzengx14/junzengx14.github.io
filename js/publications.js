/*
  Publication data — single source of truth for index.html and publications.html.

  To add a paper: copy an entry, keep `id` unique, and put it in reverse-chronological
  order. Set `selected: true` to have it appear in "Selected Publications" on the
  homepage; everything here shows up on publications.html regardless.

  `authorsHtml`, `venueHtml` and `noteHtml` are inserted as HTML so <strong> renders.
  `title`, `href` and `thumbnail.src` are escaped by the renderer.

  Optional fields the renderer already understands (unused today):
    abstractHtml — collapsible abstract
    bibtex       — collapsible BibTeX entry
*/
(function () {
  "use strict";

  window.PUBLICATIONS = [
    {
      id: "tvt2026_parking",
      title:
        "Fast Path Planning for Autonomous Vehicle Parking with Safety-Guarantee using Hamilton-Jacobi Reachability",
      authorsHtml:
        "Xuemin Chi, <strong>Jun Zeng</strong>, Jihao Huang, Zhitao Liu, Hongye Su",
      venueHtml:
        "<strong>IEEE Transactions on Vehicular Technology (TVT)</strong>, 2026",
      thumbnail: { src: "assets/tvt2026-parking/cover.png", alt: "Fast Path Planning for Autonomous Vehicle Parking with Safety-Guarantee using Hamilton-Jacobi Reachability — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/TVT.2026.3677282" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2310.15190" },
      ],
    },

    {
      id: "ojcsys2025_learning",
      title:
        "Learning-Enabled Iterative Convex Optimization for Safety-Critical Model Predictive Control",
      authorsHtml:
        "Shuo Liu, Zhe Huang, <strong>Jun Zeng</strong>, Koushil Sreenath, Calin A. Belta",
      venueHtml:
        "<strong>IEEE Open Journal of Control Systems (OJ-CSYS)</strong>, 2025",
      thumbnail: { src: "assets/ojcsys2025-learning/cover.png", alt: "Learning-Enabled Iterative Convex Optimization for Safety-Critical Model Predictive Control — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/OJCSYS.2025.3612245" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2409.08300" },
      ],
    },

    {
      id: "ras2025_drift",
      title:
        "Adaptive Learning-based Model Predictive Control Strategy for Drift Vehicles",
      authorsHtml:
        "Bei Zhou, Cheng Hu, <strong>Jun Zeng</strong>, Zhouheng Li, Johannes Betz, Lei Xie, Hongye Su",
      venueHtml:
        "<strong>Robotics and Autonomous Systems</strong>, 2025",
      thumbnail: { src: "assets/ras2025-drift/cover.png", alt: "Adaptive Learning-based Model Predictive Control Strategy for Drift Vehicles — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1016/j.robot.2025.104941" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2502.04696" },
      ],
    },

    {
      id: "tcst2025_vocbf",
      selected: true,
      title:
        "Dynamic Collision Avoidance Using Velocity Obstacle-Based Control Barrier Functions",
      authorsHtml:
        "Jihao Huang, <strong>Jun Zeng</strong>, Xuemin Chi, Koushil Sreenath, Zhitao Liu, Hongye Su",
      venueHtml:
        "<strong>IEEE Transactions on Control Systems Technology (T-CST)</strong>, 2025",
      thumbnail: { src: "assets/tcst2025-vocbf/cover.png", alt: "Dynamic Collision Avoidance Using Velocity Obstacle-Based Control Barrier Functions — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/TCST.2025.3546076" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2503.00606" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/vo-polytope" },
      ],
    },

    {
      id: "cdc2023_i2lqr",
      title:
        "i2LQR: Iterative LQR for Iterative Tasks in Dynamic Environments",
      authorsHtml:
        "Yifan Zeng*, Suiyi He*, Han Hoang Nguyen, Yihan Li, Zhongyu Li, Koushil Sreenath, <strong>Jun Zeng</strong>",
      venueHtml:
        "<strong>IEEE Conference on Decision and Control (CDC)</strong>, 2023",
      thumbnail: { src: "assets/cdc2023-i2lqr/cover.png", alt: "i2LQR: Iterative LQR for Iterative Tasks in Dynamic Environments — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/CDC49753.2023.10383960" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2302.14246" },
      ],
    },

    {
      id: "iecon2023_unicycle",
      title:
        "Obstacle Avoidance for Unicycle-Modelled Mobile Robots with Time-Varying Control Barrier Functions",
      authorsHtml:
        "Jihao Huang, Zhitao Liu, <strong>Jun Zeng</strong>, Xuemin Chi, Hongye Su",
      venueHtml:
        "<strong>Annual Conference of the IEEE Industrial Electronics Society (IECON)</strong>, 2023",
      thumbnail: { src: "assets/iecon2023-unicycle/cover.png", alt: "Obstacle Avoidance for Unicycle-Modelled Mobile Robots with Time-Varying Control Barrier Functions — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/IECON51785.2023.10312269" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2307.08227" },
      ],
    },

    {
      id: "iros2023_narrow",
      title:
        "Walking in Narrow Spaces: Safety-Critical Locomotion Control for Quadrupedal Robots with Duality-based Optimization",
      authorsHtml:
        "Qiayuan Liao, Zhongyu Li, Akshay Thirugnanam, <strong>Jun Zeng</strong>, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</strong>, 2023",
      thumbnail: { src: "assets/iros2023-narrow/cover.jpg", alt: "Walking in Narrow Spaces: Safety-Critical Locomotion Control for Quadrupedal Robots with Duality-based Optimization — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/IROS55552.2023.10341896" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2212.14199" },
        { label: "YouTube", href: "https://youtu.be/p1gSQjwXm1Q" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/quadruped_nmpc_dcbf_duality" },
      ],
    },

    {
      id: "ijrr_cassie_navigation",
      selected: true,
      title:
        "Autonomous Navigation of Underactuated Bipedal Robots in Height-Constrained Environments",
      authorsHtml:
        "Zhongyu Li, <strong>Jun Zeng</strong>, Shuxiao Chen, Koushil Sreenath",
      venueHtml:
        "<strong>International Journal of Robotics Research (IJRR)</strong>, 2023",
      thumbnail: { src: "assets/ijrr-cassie-navigation/cover.gif", alt: "Autonomous Navigation of Underactuated Bipedal Robots in Height-Constrained Environments — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1177/02783649231187670" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2109.05714" },
        { label: "YouTube", href: "https://youtu.be/Da0tebC3WuE" },
      ],
    },

    {
      id: "acc2023_dhocbf",
      title:
        "Iterative Convex Optimization for Model Predictive Control with Discrete-Time High-Order Control Barrier Functions",
      authorsHtml:
        "Shuo Liu*, <strong>Jun Zeng*</strong>, Koushil Sreenath, Calin A. Belta",
      venueHtml:
        "<strong>IEEE American Control Conference (ACC)</strong>, 2023",
      thumbnail: { src: "assets/acc2023-dhocbf/cover.png", alt: "Iterative Convex Optimization for Model Predictive Control with Discrete-Time High-Order Control Barrier Functions — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.23919/ACC55779.2023.10156532" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2210.04361" },
      ],
    },

    {
      id: "ral2023_vo",
      selected: true,
      title:
        "Velocity Obstacle for Polytopic Collision Avoidance for Distributed Multi-Robot Systems",
      authorsHtml:
        "Jihao Huang*, <strong>Jun Zeng*</strong>, Xuemin Chi, Koushil Sreenath, Zhitao Liu, Hongye Su",
      venueHtml:
        "<strong>IEEE Robotics and Automation Letters (RA-L)</strong>, 2023",
      thumbnail: { src: "assets/ral2023-vo/cover.png", alt: "Velocity Obstacle for Polytopic Collision Avoidance for Distributed Multi-Robot Systems — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/LRA.2023.3269295" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2304.07954" },
      ],
    },

    {
      id: "iros2022_rma",
      title:
        "Adapting Rapid Motor Adaptation for Bipedal Robots",
      authorsHtml:
        "Ashish Kumar, Zhongyu Li, <strong>Jun Zeng</strong>, Deepak Pathak, Koushil Sreenath, Jitendra Malik",
      venueHtml:
        "<strong>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</strong>, 2022",
      thumbnail: { src: "assets/iros2022-rma/cover.gif", alt: "Adapting Rapid Motor Adaptation for Bipedal Robots — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/IROS47612.2022.9981091" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2205.15299" },
        { label: "YouTube", href: "https://www.youtube.com/watch?v=HSdFHX0qQqg" },
        { label: "Webpage", href: "https://ashish-kmr.github.io/a-rma/" },
      ],
    },

    {
      id: "ral2022_collaborative",
      title:
        "Collaborative Navigation and Manipulation of a Cable-towed Load by Multiple Quadrupedal Robots",
      authorsHtml:
        "Chenyu Yang, Guo Ning Sue, Zhongyu Li, Lizhi Yang, Haotian Shen, Yufeng Chi, Akshara Rai, <strong>Jun Zeng</strong>, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE Robotics and Automation Letters (RA-L)</strong>, 2022",
      thumbnail: { src: "assets/ral2022-collaborative/cover.png", alt: "Collaborative Navigation and Manipulation of a Cable-towed Load by Multiple Quadrupedal Robots — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/9830869" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2206.14424" },
        { label: "YouTube", href: "https://youtu.be/mBkz_vGOSBs" },
      ],
    },

    {
      id: "rss2022_rl_syid",
      selected: true,
      title:
        "Bridging Model-based Safety and Model-free Reinforcement Learning through System Identification of Low Dimensional Linear Models",
      authorsHtml:
        "Zhongyu Li, <strong>Jun Zeng</strong>, Akshay Thirugnanam, Koushil Sreenath",
      venueHtml:
        "<strong>Robotics: Science and Systems (RSS)</strong>, 2022",
      thumbnail: { src: "assets/rss2022-rl-syid/cover.png", alt: "Bridging Model-based Safety and Model-free Reinforcement Learning through System Identification of Low Dimensional Linear Models — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.15607/RSS.2022.XVIII.033" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2205.05787" },
        { label: "YouTube", href: "https://youtu.be/C-eu-DM2Vd0" },
        { label: "Webpage", href: "https://sites.google.com/berkeley.edu/rl-sysid-rss2022" },
      ],
    },

    {
      id: "tmech_flight",
      title:
        "Model-Free Online Motion Adaptation for Energy-Efficient Flight of Multicopters",
      authorsHtml:
        "Xiangyu Wu, <strong>Jun Zeng</strong>, Andrea Tagliabue, Mark W. Mueller",
      venueHtml:
        "<strong>IEEE Access</strong>, 2022",
      thumbnail: { src: "assets/tmech-flight/cover.png", alt: "Model-Free Online Motion Adaptation for Energy-Efficient Flight of Multicopters — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/9795278" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2108.03807" },
        { label: "YouTube", href: "https://youtu.be/aLds8LVfogk" },
        { label: "GitHub", href: "https://github.com/muellerlab/adaptive-multivariable-extremum-seeking-controller" },
      ],
    },

    {
      id: "acc2022_duality",
      selected: true,
      title:
        "Duality-based Convex Optimization for Real-time Obstacle Avoidance between Polytopes with Control Barrier Functions",
      authorsHtml:
        "Akshay Thirugnanam, <strong>Jun Zeng</strong>, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE American Control Conference (ACC)</strong>, 2022",
      thumbnail: { src: "assets/acc2022-duality/cover.gif", alt: "Duality-based Convex Optimization for Real-time Obstacle Avoidance between Polytopes with Control Barrier Functions — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.23919/ACC53348.2022.9867246" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2107.08360" },
        { label: "YouTube", href: "https://youtu.be/2hKlihdERog" },
      ],
    },

    {
      id: "icra2022_duality",
      selected: true,
      title:
        "Safety-Critical Control and Planning for Obstacle Avoidance between Polytopes with Control Barrier Functions",
      authorsHtml:
        "Akshay Thirugnanam*, <strong>Jun Zeng*</strong>, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE International Conference on Robotics and Automation (ICRA)</strong>, 2022",
      thumbnail: { src: "assets/icra2022-duality/cover.gif", alt: "Safety-Critical Control and Planning for Obstacle Avoidance between Polytopes with Control Barrier Functions — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/ICRA46639.2022.9812334" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2109.12313" },
        { label: "YouTube", href: "https://youtu.be/2hKlihdERog" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/cbf" },
      ],
    },

    {
      id: "icra2022_racing",
      title:
        "Autonomous Racing with Multiple Vehicles using a Parallelized Optimization with Safety Guarantee using Control Barrier Functions",
      authorsHtml:
        "Suiyi He*, <strong>Jun Zeng*</strong>, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE International Conference on Robotics and Automation (ICRA)</strong>, 2022",
      thumbnail: { src: "assets/icra2022-racing/cover.gif", alt: "Autonomous Racing with Multiple Vehicles using a Parallelized Optimization with Safety Guarantee using Control Barrier Functions — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/ICRA46639.2022.9811969" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2112.06435" },
        { label: "YouTube", href: "https://youtu.be/1zTXfzdQ8w4" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/car-racing" },
      ],
    },

    {
      id: "icra2022_bo",
      title:
        "Bayesian Optimization Meets Hybrid Zero Dynamics: Safe Parameter Learning for Bipedal Locomotion Control",
      authorsHtml:
        "Lizhi Yang*, Zhongyu Li*, <strong>Jun Zeng</strong>, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE International Conference on Robotics and Automation (ICRA)</strong>, 2022",
      thumbnail: { src: "assets/icra2022-bo/cover.gif", alt: "Bayesian Optimization Meets Hybrid Zero Dynamics: Safe Parameter Learning for Bipedal Locomotion Control — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/ICRA46639.2022.9812154" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2203.02570" },
        { label: "YouTube", href: "https://youtu.be/WxkdJdMRdfM" },
      ],
    },

    {
      id: "cdc2021_nmpc_dcbf_feasibility",
      title:
        "Enhancing Feasibility and Safety of Nonlinear Model Predictive Control with Discrete-Time Control Barrier Functions",
      authorsHtml:
        "<strong>Jun Zeng*</strong>, Zhongyu Li*, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE Conference on Decision and Control (CDC)</strong>, 2021",
      thumbnail: { src: "assets/cdc2021-nmpc-dcbf-feasibility/cover.png", alt: "Enhancing Feasibility and Safety of Nonlinear Model Predictive Control with Discrete-Time Control Barrier Functions — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/9683174" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2105.10596" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/CLF-CBF-NMPC" },
      ],
    },

    {
      id: "case2021_hoop",
      title:
        "Autonomous Navigation for Quadrupedal Robots with Optimized Jumping through Constrained Obstacles",
      authorsHtml:
        "Scott Gilroy*, Derek Lau*, Lizhi Yang*, Ed Izaguirre, Kristen Biermayer, Anxing Xiao, Mengti Sun, Ayush Agrawal, <strong>Jun Zeng</strong>, Zhongyu Li, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE International Conference on Automation Science and Engineering (CASE)</strong>, 2021",
      thumbnail: { src: "assets/case2021-hoop/cover.gif", alt: "Autonomous Navigation for Quadrupedal Robots with Optimized Jumping through Constrained Obstacles — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/CASE49439.2021.9551524" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2107.00773" },
        { label: "YouTube", href: "https://youtu.be/5pzJ8U7YyGc" },
      ],
    },

    {
      id: "icra2021_guide_dog",
      selected: true,
      title:
        "A Quadrupedal Robot Leading Human with Leash-Guided Hybrid Physical Interaction",
      authorsHtml:
        "Anxing Xiao*, Wenzhe Tong*, Lizhi Yang*, <strong>Jun Zeng</strong>, Zhongyu Li, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE International Conference on Robotics and Automation (ICRA)</strong>, 2021",
      noteHtml:
        "<span class=\"pub-award\"><strong>Best Paper Award in Service Robotics — Finalist</strong></span>",
      thumbnail: { src: "assets/icra2021-guide-dog/cover.gif", alt: "A Quadrupedal Robot Leading Human with Leash-Guided Hybrid Physical Interaction — thumbnail" },
      links: [
        { label: "Publisher", href: "https://doi.org/10.1109/ICRA48506.2021.9561786" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2103.14300" },
        { label: "YouTube", href: "https://youtu.be/FySXRzmji8Y" },
      ],
    },

    {
      id: "acc2021_lane_change",
      title:
        "Rule-Based Safety-Critical Control Design using Control Barrier Functions with Application to Autonomous Lane Change",
      authorsHtml:
        "Suiyi He, <strong>Jun Zeng</strong>, Bike Zhang, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE American Control Conference (ACC)</strong>, 2021",
      thumbnail: { src: "assets/acc2021-lane-change/cover.png", alt: "Rule-Based Safety-Critical Control Design using Control Barrier Functions with Application to Autonomous Lane Change — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/9482848" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2103.12382" },
        { label: "YouTube", href: "https://youtu.be/icmy9u2a4z4" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/Lane-Change-CBF" },
      ],
    },

    {
      id: "acc2021_feasibility",
      selected: true,
      title:
        "Safety-Critical Control with Optimal-decay Control Barrier Function with Guaranteed Point-wise Feasibility",
      authorsHtml:
        "<strong>Jun Zeng</strong>, Bike Zhang, Zhongyu Li, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE American Control Conference (ACC)</strong>, 2021",
      thumbnail: { src: "assets/acc2021-feasibility/cover.png", alt: "Safety-Critical Control with Optimal-decay Control Barrier Function with Guaranteed Point-wise Feasibility — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/9482626" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2103.12375" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/CBF-Pointwise-Feasibility" },
      ],
    },

    {
      id: "acc2021_mpc_cbf",
      selected: true,
      title:
        "Safety-Critical Model Predictive Control with Discrete-Time Control Barrier Function",
      authorsHtml:
        "<strong>Jun Zeng*</strong>, Bike Zhang*, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE American Control Conference (ACC)</strong>, 2021",
      thumbnail: { src: "assets/acc2021-mpc-cbf/cover.png", alt: "Safety-Critical Model Predictive Control with Discrete-Time Control Barrier Function — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/9483029" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2007.11718" },
        { label: "GitHub", href: "https://github.com/HybridRobotics/MPC-CBF" },
        { label: "NorCal Control Workshop", href: "https://youtu.be/IfNgogcLSjE" },
      ],
    },

    {
      id: "iros2020_ball_manipulation",
      title:
        "Dynamic Legged Manipulation of a Ball Through Multi-Contact Optimization",
      authorsHtml:
        "Chenyu Yang, Bike Zhang, <strong>Jun Zeng</strong>, Ayush Agrawal, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</strong>, 2020",
      thumbnail: { src: "assets/iros2020-ball-manipulation/cover.gif", alt: "Dynamic Legged Manipulation of a Ball Through Multi-Contact Optimization — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/9341218" },
        { label: "ArXiv", href: "https://arxiv.org/abs/2008.00191" },
        { label: "YouTube", href: "https://youtu.be/rIVkfudC4_8" },
      ],
    },

    {
      id: "ral2020_ppql",
      selected: true,
      title:
        "Differential Flatness based Path Planning with Direct Collocation on Hybrid Modes for a Quadrotor with a Cable-Suspended Payload",
      authorsHtml:
        "<strong>Jun Zeng</strong>, Prasanth Kotaru, Mark W. Mueller, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE Robotics and Automation Letters (RA-L)</strong>, 2020",
      thumbnail: { src: "assets/ral2020-ppql/cover.gif", alt: "Differential Flatness based Path Planning with Direct Collocation on Hybrid Modes for a Quadrotor with a Cable-Suspended Payload — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/8988166" },
        { label: "YouTube", href: "https://youtu.be/e09RZOx_nZk" },
      ],
    },

    {
      id: "acc2019_quad_pulley_load",
      title:
        "Geometric Control and Differential Flatness of a Quadrotor UAV with Load Suspended from a Pulley",
      authorsHtml:
        "<strong>Jun Zeng</strong>, Prasanth Kotaru, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE American Control Conference (ACC)</strong>, 2019",
      thumbnail: { src: "assets/acc2019-quad-pulley-load/cover.png", alt: "Geometric Control and Differential Flatness of a Quadrotor UAV with Load Suspended from a Pulley — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/8815173" },
      ],
    },

    {
      id: "acc2019_quad_offset_load",
      title:
        "Geometric Control of a Quadrotor with a Load Suspended from an Offset",
      authorsHtml:
        "<strong>Jun Zeng</strong>, Koushil Sreenath",
      venueHtml:
        "<strong>IEEE American Control Conference (ACC)</strong>, 2019",
      thumbnail: { src: "assets/acc2019-quad-offset-load/cover.png", alt: "Geometric Control of a Quadrotor with a Load Suspended from an Offset — thumbnail" },
      links: [
        { label: "Publisher", href: "https://ieeexplore.ieee.org/document/8814939" },
      ],
    },
  ];
})();
