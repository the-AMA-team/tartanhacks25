fetch('http://localhost:3000/api/generate-param', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        resume: `Mehek Niwas
 mehek.niwas@gmail.com | linkedin.com/in/mehek-niwas | github.com/mehek-niwas
 Education
 Rutgers University, Honors College
 Computer Science and Mathematics, B.S.
 • Dean’s Scholarship Recipient, Wabtec Scholarship Foundation Recipient
 New Brunswick, NJ
 Expected Graduation: May 2027
 • Relevant Courses: Intro to Data Science, Data Structures, Numerical Analysis, Linear Algebra
 Florida Institute of Technology
 Dual Enrollment
 Melbourne, FL
 • Relevant Courses: Deep Learning, Machine Learning Principles, Intro to PDEs, Discrete Math, Calc 3
 Experience
 AI/ML Development Intern
 Data Glacier
 Sep. 2024- Dec. 2024
 Remote
 • Optimized benchmark CNN & RNN models by 20% to an average of 70% accuracy in medical dataset classification
 • Utilized HPC Cluster for GPU Acceleration in model training, through Linux OS
 • Installed packages and managed virtual environments within HPC Cluster using Miniconda3
 Projects
 Fashion MNIST Classification With PCA & QDA Optimization
 • Improved model accuracy from 66% to 81% by combining unsupervised PCA and supervised QDA
 • Implemented inverse transform for feature visualization on Sparse PCA, Incremental PCA, and Batch PCA
 • Analyzed class F1 scores and overfitting during parameter tuning to determine model pipeline
 • ML Techniques: Feature Visualization, Principal Component Analysis, Quadratic Discriminant Analysis
 Recurrent Neural Networks Optimization for EEG-Based Classification of Brain Activity
 • Conducted parameter tuning on RNN cell type, hidden size, and dropout rate to optimize model by 35%
 • Achieved an average accuracy of 71% on over 11,500 EEG recordings from 500+ patients
 • Analyzed class F1 scores and overfitting during parameter tuning to determine model pipeline
 • DL Techniques: GPU Acceleration, Recurrent Neural Networks, LSTM, GRU, Parameter Tuning
 Scraply Best Developer Tool @ HackPrinceton
 • Developed an interactive web application for visually creating and training custom neural networks (NNs)
 • Built a dynamic API that constructs and trains NNs using PyTorch, tailored to user specifications
 • Integrated model training on Flask with logic to provide actionable feedback on model improvement
 • Deployed on AWS EC2 with Terraform, establishing a scalable infrastructure for seamless model training
 • Tools: CUDA, PyTorch, Flask, AWS, Terraform, Git
 SkinSense Special Mention @ Rutgers Health Hack | Team Lead
 • Led a team of 9 to develop a website to detect monkeypox and other possible skin diseases from uploaded photos
 • Trained multiple YOLO object classification models for monkeypox skin disease detection with 1,000+ images
 • Integrated YOLO models using Flask, and deployed with AWS for real-time procressing and predictions
 • Tools: Ultralytics, Flask, AWS, Git
 Technical Skills
 Languages: Python, C/C++, Java, JavaScript, MATLAB, R, LATEX
 Tools: Linux, Git, Anaconda, Google Cloud Platform, MongoDB, Flask, AWS
 Libraries: PyTorch, Scikit-Learn, Keras, Gensim, Ultralytics, Pandas, NumPy, Matplotlib
 High-Performance Computing: SLURM workload manager, GPU Acceleration with CUDA
 Awards
 Best Developer Tool @ HackPrinceton– project recognized for creativity & enhancement of developer experience
 Special Mention @ Rutgers Health Hack– $250 Prize– for innovation and integration of AI in SkinSense project
 State Bid, 2nd Place @ HOSA Regional (Pharmacology)– in drug classification, interaction, and dosage
 Regional Finalist, 2nd Place @ North Florida Brain Bee– in neuroanatomy, neural development, and disorders`,
        instagramData: `{"Profile":"{\"username\": \"itsz_mehek\", \"profile_pic\": \"https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/471281366_1567491964650212_5516895608592809473_n.jpg?stp=dst-jpg_e0_s150x150_tt6&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=uWtvqhvyqigQ7kNvgGPmT1l&_nc_gid=314365a3399746969d8ea74b00fb7a98&edm=AJlpnE4BAAAA&ccb=7-5&oh=00_AYAZK_4mLq5kpJAlRPUDHU0KCj8thqft0WOOaRmzECUVyQ&oe=67AD92FF&_nc_sid=125e1d\", \"bio\": \"this is my spam\\ni like kirby and avatar and korra\\n\\ud83e\\udd76 rutgers honors '28\\ndisney-land (FL) ---> desi-land (NJ)\", \"posts\": [{\"url\": \"https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/475981102_18052733444281738_187637941988981028_n.jpg?stp=dst-jpg_e15_fr_s1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDgxMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ltJgX9JXjJoQ7kNvgFTET21&_nc_gid=7a9b1b3f269a40b6af63371ace9efa1b&edm=APU89FABAAAA&ccb=7-5&oh=00_AYCG-IqAeB7qOY2riYJK-WYexw_aG3j0eLOkpTqpak-4iA&oe=67ADAF1E&_nc_sid=bc0c2c\", \"caption\": \"7 people 1 car\"}, {\"url\": \"https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/476116144_18052722323281738_8448455613427470162_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MzB4NzMwLnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=-Om4mQLJg_0Q7kNvgEknqpa&_nc_gid=7a9b1b3f269a40b6af63371ace9efa1b&edm=APU89FABAAAA&ccb=7-5&oh=00_AYCaAZpWu5qAI49pSm9gMvKD5Doj9sNGLNm-9NTdh3jOTQ&oe=67AD8428&_nc_sid=bc0c2c\", \"caption\": \"\"}, {\"url\": \"https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/474911496_1631341010807644_7099293114794557121_n.heic?stp=dst-jpg_e35_s1080x1080_tt6&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Yd0OPtYfHLYQ7kNvgH2IyHw&_nc_gid=7a9b1b3f269a40b6af63371ace9efa1b&edm=APU89FABAAAA&ccb=7-5&oh=00_AYDSSzeSL77ROll0VWSTRPDhoKKtpkGd8rHFaN4eOfFMOQ&oe=67ADB079&_nc_sid=bc0c2c\", \"caption\": \"sunrises like this \\ud83c\\udf3b\\ud83c\\udf1e\\n\\ud83d\\udcf7: @thesonofphysics @tackygon\\n\\ud83d\\ude97 + burnt hot chocolate: @hitech.tech101\"}, {\"url\": \"https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/473624394_608476775497099_3841101350233630780_n.heic?stp=dst-jpg_e35_s1080x1080_tt6&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=ug0WdJERZ_AQ7kNvgEwporX&_nc_gid=7a9b1b3f269a40b6af63371ace9efa1b&edm=APU89FABAAAA&ccb=7-5&oh=00_AYD032iT-4yXHizeOwoXRoRN_9VfkNCUIkup__Cvs4P-Lw&oe=67AD8023&_nc_sid=bc0c2c\", \"caption\": \"1/13/2025 in pennsylvaniaaaaaaaaaaaaaaa \\u26f7\\ufe0f\\u26f7\\ufe0f\\u26f7\\ufe0f\"}]}"}`
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });