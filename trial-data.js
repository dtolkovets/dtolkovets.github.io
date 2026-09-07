// Approved content from content.md / site snapshot. Wording is fixed.
const YT = (id, cap, short) => ({ yt: id, cap, short: !!short });
const IMG = (img, cap) => ({ img, cap });
const CONTAIN = (img, cap) => ({ img, cap, contain: true });
const VID = (video, poster, cap) => ({ video, poster, cap });
const HEAD = (heading, text) => ({ heading, text });

export const DATA = {
  order: ['dual-llm', 'face-textures', 'realtime-cv', 'smart-glasses', 'cobot', 'rag-chatbot', 'harvesting-robot'],
  projects: [
    { slug:'dual-llm', title:'Dual-LLM Architecture for Asynchronous Quality Correction', year:'Planned 2027', badge:'Upcoming', img:'assets/dual-llm/card-still.webp' },
    { slug:'face-textures', title:'Generative Face Textures for a Projection Robot', year:'2026', img:'assets/face-textures/ui-webgl-poster.webp', loop:'assets/face-textures/ui-webgl-loop.mp4' },
    { slug:'realtime-cv', title:'Real-Time Computer Vision for a Social Robot', year:'2025', img:'assets/realtime-cv/card-settings.webp' },
    { slug:'smart-glasses', title:'Open-Source Smart Glasses Kit', year:'2024 – 2025', img:'assets/smart-glasses/turntable-poster.webp', loop:'assets/smart-glasses/turntable-loop.mp4' },
    { slug:'cobot', title:'Voice-Controlled Cobot System', year:'2024 – 2025', img:'assets/voice-cobot/card-still.webp' },
    { slug:'rag-chatbot', title:'Retrieval-Augmented Generation Study Chatbot', year:'2024', img:'assets/rag-chatbot/card-still.webp' },
    { slug:'harvesting-robot', title:'Autonomous Harvesting Robot', year:'2023 – 2024', img:'assets/harvesting-robot/card-still.webp' }
  ],
  pages: {
    'dual-llm': {
      title:'Dual-LLM Architecture for Asynchronous Quality Correction', status:"Bachelor's thesis · upcoming · Planned 2027", origin:'TH Köln, in collaboration with Furhat Robotics',
      sub:'Two language models share one conversation: a fast model answers every turn, a slower and stronger model reviews each exchange in the background and feeds corrections forward. Latency stays low while quality can rise.',
      bullets:['Investigates an asynchronous dual-LLM architecture for conversational human-robot interaction, addressing the tension between response latency and response quality.','The fast model faces the user and never waits; the slow model reviews each exchange after the response was sent and writes feedback into a channel that the fast model reads from its next response onwards.','Research question: How does an asynchronous dual-LLM architecture, which preserves user-facing response latency by design, affect conversational response quality compared to a conventional single-LLM setup?','Method: text-only prototype with cloud-API models, quality scored per dimension by an LLM judge under simulated conversation timing, and a comparison of slow models that differ in capability and speed.'],
      tags:['Large Language Models','Conversational HRI','Asynchronous Architecture','LLM-as-Judge Evaluation'],
      media:[ CONTAIN('assets/dual-llm/architecture.webp','Asynchronous dual-LLM architecture.') ]
    },
    'face-textures': {
      title:'Generative Face Textures for a Projection Robot', status:'Internship project · 2026', origin:'Furhat Robotics, Stockholm',
      sub:"Describe a face in words or drop in a reference image, and a generative pipeline turns it into a texture that fits the robot's back-projected head.",
      bullets:["A generation pipeline that turns a text prompt, a reference image, or both into a face texture that fits the robot's projection geometry.",'Built a browser interface with a live 3D preview of the generated face on the robot head next to the current face map, with separate face and eye generation steps.','Added character load/save, reference-image upload, and a gesture panel to check how a generated texture behaves under facial animation.'],
      tags:['Generative Models','Multimodal Input','UI Prototyping','WebGL','Python','Docker'],
      media:[
        VID('assets/face-textures/ui-webgl-loop.mp4','assets/face-textures/ui-webgl-poster.webp','Interactive 3D preview: the generated face on the head model can be moved, rotated and zoomed.'),
        VID('assets/face-textures/ui-gestures-loop.mp4','assets/face-textures/ui-gestures-poster.webp','Gesture test: the generated texture under facial animation.'),
        { pair:['assets/face-textures/screenshot-2.webp','assets/face-textures/screenshot-3.webp'], cap:'Two more results, generated from the prompts “rock-lava face” and “old grandma with blue lips, blue eyebrows and a purple heart tattoo”.' }
      ]
    },
    'realtime-cv': {
      title:'Real-Time Computer Vision for a Social Robot', status:'Internship project · 2025', origin:'Furhat Robotics, Stockholm',
      sub:'A local object-detection module for the Furhat robot, tuned live from a custom interface.',
      bullets:["A local object-detection module for the Furhat robot: a YOLO detector runs on a PC beside the robot and processes the robot's camera stream via Furhat's WebSocket API in real time.",'Custom interface for tuning while the system runs: confidence threshold, processing resolution, class filter, and model switching.','Presented the system in a pre-recorded demo at the 9th Furhat Conference.'],
      tags:['Computer Vision','UI Prototyping','WebSockets','Python'],
      media:[
        YT('plZun_BxsN4',"Demo for the 9th Furhat Conference: computer vision running on a PC with the robot's camera streamed over Furhat's real-time API."),
        IMG('assets/realtime-cv/ui-standard.webp','Settings panel with dynamic confidence threshold and class filter.'),
        IMG('assets/realtime-cv/ui-processing-resolution.webp','Processing resolution can be changed at runtime; a toggle switches the preview between full and processing resolution.'),
        IMG('assets/realtime-cv/ui-detection-results.webp','Detection log for analysis and debugging.'),
        IMG('assets/realtime-cv/ui-diff-model-rock.webp','Switching to a different model at runtime, here a rock-paper-scissors hand-gesture detector.')
      ]
    },
    'smart-glasses': {
      title:'Open-Source Smart Glasses Kit', status:'Course project · 10/2024 – 05/2025', origin:'Product Engineering II · TH Köln',
      sub:'A low-cost, multimodal-LLM smart glasses kit designed so that non-experts can build and use it, validated in a usability study.',
      bullets:['Engineered a low-cost, MLLM-based smart glasses kit for easy replication by non-experts.','Designed hardware and software to enable assembly without special tools or programming.','Conducted a usability study where 5 out of 6 non-experts assembled and operated the kit unaided.'],
      tags:['Multimodal LLM Integration','Speech Processing','UI Design','UX','CAD','Usability Testing','Python'],
      link:{ href:'https://v0-open-a-eyes.vercel.app/', label:'Open-A-Eyes project site ↗' },
      media:[
        VID('assets/smart-glasses/turntable-loop.mp4','assets/smart-glasses/turntable-poster.webp','Exploded view of the kit.'),
        IMG('assets/smart-glasses/glasses.webp','The assembled kit.'),
        CONTAIN('assets/smart-glasses/exploded-view-labeled.webp','Labelled exploded view of all parts.'),
        YT('2CeTvoMGqPg','Product introduction video (Open-A-Eyes).'),
        { shorts:[{ id:'vRx5oL_EMwU', title:'Analysing art' },{ id:'TImiFf-Whj4', title:'Helping with maths' },{ id:'kwV-fQEeKrc', title:'Reading package information' }], cap:'Example use cases: analysing art · helping with maths · reading package information.' }
      ]
    },
    'cobot': {
      title:'Voice-Controlled Cobot System', status:'Course project · 10/2024 – 02/2025', origin:'Service and Industry Robotics · TH Köln',
      sub:'Ask for a tool, get the tool: a ROS 2 service architecture that links speech, object detection, and arm control for hands-free fetching and stowing.',
      bullets:['Developed a ROS 2 service-based architecture with a central manager orchestrating dialogue, object detection, and robotic arm control for collaborative tool fetching and stowing.','Linked STT, LLM intent recognition, and TTS for hands-free interaction in a shared workspace.','Derived closed-form IK for a 5-DOF arm, bypassing 6D solver limits caused by coupled orientation.','Iteratively trained a YOLO11-OBB model for oriented tool detection, raising mAP50-95 to ~81%.'],
      tags:['Human-Robot Interaction','Computer Vision','Speech Processing','ROS 2','MoveIt','Gazebo','RViz','TF2','Empirical Research','Python','C++','CMake'],
      media:[
        YT('JqvvkfmM_tQ','Prototype demo video.'),
        IMG('assets/voice-cobot/demo-example.webp','Tool hand-over after a voice request.'),
        CONTAIN('assets/voice-cobot/concept.webp','Concept sketch: ask for a tool by voice, the arm fetches it.'),
        HEAD('System architecture','ROS 2 service architecture from the project report: a manager client coordinates the Speech, Vision and Arm services. Activity diagrams, labels in German.'),
        CONTAIN('assets/voice-cobot/uml-manager-client.webp','Manager (client): the central controller. It requests the Speech, Vision and Arm services in turn and steers the flow with two variables, next_srv (which service runs next) and target (which tool is meant).'),
        CONTAIN('assets/voice-cobot/uml-vision-service.webp','Vision service: finds the requested tool with a custom-trained YOLO11m-OBB model and returns its spatial coordinates. If the tool is not in the collaboration space, the user gets audio feedback and a new voice command is requested.'),
        CONTAIN('assets/voice-cobot/uml-arm-service.webp','Arm service: two routines. Stowing grasps the tool at its detected position and places it in its storage slot; fetching takes the tool from its fixed slot and places it in the collaboration space. Both end in the rest position and report completion to the manager.')
      ]
    },
    'rag-chatbot': {
      title:'Retrieval-Augmented Generation Study Chatbot', status:'Course project · 02/2024 – 10/2024', origin:'Human-Machine-Interaction · TH Köln',
      sub:'An exam-preparation chatbot that shows where its answers come from, measured against a plain LLM for hallucinations.',
      bullets:['Built a RAG chatbot for exam preparation with an interface that displays information sources.','Quantitatively compared retrieval-augmented GPT-4o with base GPT-4o on hallucination rates.','Conducted a usability study to assess the helpfulness of the displayed information sources.'],
      tags:['Retrieval-Augmented Generation','Human-Machine Interaction','UI Design','Empirical Research','Usability Testing','Python','Conda'],
      media:[
        IMG('assets/rag-chatbot/chatbot-example.webp',"The interface: chat on the left, the retrieved sources in the middle, and a document viewer on the right that renders formulas and images correctly. Built on Weaviate's open-source RAG front-end, adapted for the study."),
        IMG('assets/rag-chatbot/color-blindness-visualisation.webp','The interface was designed to stay usable with colour-vision deficiencies; normal vision next to simulated blue, red and green weakness.')
      ]
    },
    'harvesting-robot': {
      title:'Autonomous Harvesting Robot', status:'Course project · 10/2023 – 10/2024', origin:'Engineering Office III & Product Engineering I · TH Köln',
      sub:'A rover, an arm and a detector that find and pick up “apples” (tennis balls) on their own, plus a quantified comparison of a time-of-flight scanner against computer vision.',
      bullets:['Developed an autonomous harvesting system, combining a rover, a robotic arm, and a detector.','Modelled kinematics and implemented P/PI control for approaching and picking up apples.','Built a ToF-based 2D scanner, trained a YOLOv8n model on 2,445 self-collected images (Raspberry Pi 5, 10 to 15 FPS), and compared detectors quantitatively.',"Demonstrated the YOLO-based system was ~18× faster (50.9 → 2.8 s/m) and reduced task error rate from 40% to 0% on an indoor track with 18 target positions (Welch's t-test, Fisher's exact test)."],
      tags:['Control Engineering','Computer Vision','Sensor Integration','Sensor Processing','CAD','FEA','Soldering','Empirical Research','Python','C++'],
      media:[
        IMG('assets/harvesting-robot/rover.webp','The rover with arm, gripper and both detectors.'),
        IMG('assets/harvesting-robot/yolov5n-detection.webp','Detection example: “ball” detections with bounding boxes in the camera image.'),
        CONTAIN('assets/harvesting-robot/comparison-heatmap.webp','Time to retrieve the ball from each of the 18 target positions, starting bottom centre: ToF system 50.9 s/m on average, vision system 2.8 s/m.'),
        YT('hvwtfKgKrhQ','Side-by-side comparison of both systems, cut as a light-hearted short video.', true),
        HEAD('System architecture','Two detection systems on one rover: a servo-swept time-of-flight scanner and a camera-based YOLO pipeline on a Raspberry Pi 5. Both report to an Arduino Mega 2560 that computes heading and distance and drives rover and gripper. Diagram labels are in German.'),
        CONTAIN('assets/harvesting-robot/comparison-overview.webp','How the two systems work, from sensing to actuation.'),
        CONTAIN('assets/harvesting-robot/cv-system-energy-information-flow.webp','Energy and information flow of the vision-based rover.')
      ]
    }
  },
  interests: ['Robotics','Social Robotics','Computer Vision','Human-Machine Interaction','Speech Interfaces','Kinematics & Control','Embedded Hardware','Mechanical Design','Multimodal LLMs'],
  facts: [ {k:'Based in', v:'Cologne, Germany'}, {k:'Studying', v:'BSc MPEC, TH Köln, expected 2027'}, {k:'Languages', v:'German (native) · English (C1, IELTS 7.5)'} ],
  roles: [
    { logo:'assets/logos/furhat.webp', title:'Prototyping & Concepting Intern', org:'Furhat Robotics AB', when:'07/2025 – 04/2026 · Stockholm, Sweden · full-time',
      bullets:['Developed a local real-time object detection module, including a custom interface for dynamic parameter tuning (confidence threshold, processing resolution, class filtering).','Built full-stack prototypes using WebSockets and n8n to enable automated conversation summarisation and long-term memory for social interaction.','Conducted electromechanical troubleshooting, including PCB flashing and soldering, to resolve display and servo motor faults, and documented root causes for the engineering team.',"Prototyped a pipeline using generative models with multimodal inputs (text and image) to produce face textures compliant with the robot's projection geometry."],
      chips:['Human-Robot Interaction','Computer Vision','WebSockets','Generative Models','Electronics Troubleshooting','Rapid Prototyping','Python','C++'] },
    { logo:'assets/logos/th-koeln.webp', title:'Student Teaching Assistant', org:'Institute of Automotive Engineering, TH Köln', when:'10/2024 – 06/2026 · Cologne, Germany · part-time, remote since 07/2025',
      bullets:['Tutored students in embedded C++ for mobile robots, assisting with PID control, sensor fusion (IMU/ToF/Ultrasonic), and hardware-software integration.','Guided students in designing algorithms for autonomous tasks like maze navigation, parking, and collision avoidance, providing feedback on logic and code structure.','Developed study materials for sensor data visualisation and Git workflows.','Graded scientific reports, controller documentation, and UML system models.'],
      chips:['Embedded C++','PID Control','Sensor Fusion','Mobile Robots','Git','Teaching'] },
    { logo:'assets/logos/serverhero.webp', title:'Operations & Production', org:'Serverhero GmbH', when:'01/2018 – 09/2024 · Cologne, Germany · full-time & part-time',
      bullets:['Supported server production through hardware assembly, testing, and quality assurance.','Developed Excel tools (VBA, pivot tables) to automate accounting processes.'],
      chips:['Hardware Assembly','Quality Assurance','Excel VBA'] }
  ],
  volunteer: [
    { h:'Erasmus Ambassador', when:'04/2026 – present', where:'Remote', desc:'Guidance and support for subsequent exchange students.' },
    { h:'Finance Administrator', when:'08/2022 – present', where:'Bahn-Landwirtschaft e.V., Cologne', desc:'Manage allotment garden finances, maintain financial spreadsheets, and issue member invoices.' }
  ],
  education: { logo:'assets/logos/th-koeln.webp', degree:'BSc Mechanical Engineering – Product Engineering and Context (MPEC)', org:'TH Köln – University of Applied Sciences', when:'10/2022 – 08/2027 (expected) · Cologne, Germany · GPA 1.8 (German scale: 1.0 best, 4.0 pass)',
    bullets:['Problem-Based Learning (PBL) with smart mechatronic systems and product development.','Focus on research methodology: projects concluded with empirical evaluations and scientific papers.','Elective specialisation: Social Robotics (Human-Machine-Interaction, Service and Industry Robotics).','Strong results in research courses: Product Engineering I & II (1.0) and Social Robotics (1.7).'] },
  skills: [
    { h:'Programming & Tools', items:['Python','C++','MATLAB/Simulink','Linux','Docker','Git','WebSockets'] },
    { h:'Robotics', items:['ROS 2 (Galactic)','MoveIt 2','Ignition Gazebo','RViz2','TF2'] },
    { h:'Artificial Intelligence', items:['Computer Vision (YOLOv8/11)','Retrieval-Augmented Generation (RAG)','Multimodal LLM Integration','Speech Processing (STT/TTS)'] },
    { h:'Electronics', items:['ESP32','Arduino','Raspberry Pi','Sensor Integration','Circuit Prototyping','Soldering'] },
    { h:'Mechanical', items:['Autodesk Fusion 360 (CAD)','Finite Element Analysis','FDM and Resin 3D Printing'] },
    { h:'Evaluation', items:['Usability Studies',"Statistical Analysis (t-test, z-test, F-tests, Fisher's exact test)"] }
  ],
  certs: [
    { h:'IELTS Academic', score:'Overall Band 7.5 · CEFR C1', meta:'British Council · IDP · Cambridge, May 2026', desc:'Academic module test report. Scores verifiable by recognising organisations at ielts.org/verify.' },
    { h:'MATLAB Onramp', meta:'MathWorks Training Services, May 2024', desc:'MATLAB Onramp: self-paced MathWorks training course, completed 100%.', thumb:'assets/documents/matlab-onramp-thumb.webp', doc:'matlab-onramp' },
    { h:'Simulink Onramp', meta:'MathWorks Training Services, May 2024', desc:'Simulink Onramp: self-paced MathWorks training course, completed 100%.', thumb:'assets/documents/simulink-onramp-thumb.webp', doc:'simulink-onramp' }
  ],
  award: { h:'Top of class at Hans-Böckler-Berufskolleg, 2021', meta:'Bestenurkunde · Cologne, July 2021', desc:'Recognised as best of the class (Klassenbester) at the Hans-Böckler-Berufskolleg Köln.', thumb:'assets/documents/bestenurkunde-2021-thumb.webp', doc:'bestenurkunde-2021' },
  docs: {
    'matlab-onramp': { kicker:'— Certificate', h:'MATLAB Onramp', meta:'MathWorks Training Services, May 2024', desc:'MATLAB Onramp: self-paced MathWorks training course, completed 100%.', sheet:'assets/documents/matlab-onramp.webp' },
    'simulink-onramp': { kicker:'— Certificate', h:'Simulink Onramp', meta:'MathWorks Training Services, May 2024', desc:'Simulink Onramp: self-paced MathWorks training course, completed 100%.', sheet:'assets/documents/simulink-onramp.webp' },
    'bestenurkunde-2021': { kicker:'— Recognition', h:'Top of class at Hans-Böckler-Berufskolleg, 2021', meta:'Bestenurkunde · Cologne, July 2021', desc:'Recognised as best of the class (Klassenbester) at the Hans-Böckler-Berufskolleg Köln.', sheet:'assets/documents/bestenurkunde-2021.webp' }
  }
};
