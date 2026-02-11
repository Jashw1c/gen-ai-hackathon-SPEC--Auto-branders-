<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Brand Result</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="result-container fade-in">

    <h1 class="result-title">✨ Your Brand Identity</h1>

    <!-- Logo & Tagline -->
    <div class="result-card colorful slide-up">
      <h2>Logo Preview</h2>
      <div class="logo-display" id="logoDisplay"></div>
      <h3 id="brandTitle"></h3>
      <p id="tagline" class="tagline"></p>
    </div>

    <!-- Color Palette -->
    <div class="result-card slide-up">
      <h2>🎨 Color Palette</h2>
      <div id="colors"></div>
    </div>

    <!-- Brand Story -->
    <div class="result-card slide-up">
      <h2>📖 Brand Story</h2>
      <p id="brandStory"></p>
    </div>

  </div>

  <script>
    // Get data from localStorage
    const name = localStorage.getItem("brandName");
    const type = localStorage.getItem("brandType");
    const description = localStorage.getItem("description");

    // Check if data exists
    if (!name || !type || !description) {
      document.body.innerHTML = "<h2 style='text-align:center;margin-top:100px;'>No Data Found. Please go back.</h2>";
    } else {
      // Set brand title and story
      document.getElementById("brandTitle").innerText = name;
      document.getElementById("brandStory").innerText = description;

      // Tagline Generator
      function generateTagline(type){
        const taglines = {
          luxury: ["Elegance Redefined.", "Luxury Without Limits.", "Where Prestige Meets Style."],
          fashion: ["Style That Speaks.", "Your Fashion, Your Statement.", "Trendsetters Unite."],
          tech: ["Innovating The Future.", "Smart Solutions, Smart Life.", "Tomorrow, Today."],
          cars: ["Drive Your Passion.", "Engineering Excellence.", "Feel The Road."],
          electric: ["Powering Tomorrow.", "Clean Energy, Bold Moves.", "Electrify Your Life."],
          vintage: ["Timeless Excellence.", "Classic Never Fades.", "Heritage With Style."],
          startup: ["Ideas Into Action.", "Building The Next Big Thing.", "Dream. Launch. Grow."],
          healthcare: ["Caring Through Innovation.", "Health Meets Technology.", "Better Life, Better Care."],
          realestate: ["Your Dream, Our Vision.", "Homes That Inspire.", "Invest In Life."],
          food: ["Taste The Passion.", "Flavors That Connect.", "Savor Every Bite."]
        };
        if(taglines[type]){
          const options = taglines[type];
          return options[Math.floor(Math.random() * options.length)];
        }
        return "Built For Greatness.";
      }

      document.getElementById("tagline").innerText = generateTagline(type);

      // Color Palette Generator
      function generatePalette(type){
        if(type==="luxury") return ["#000000","#C6A75E","#ffffff"];
        if(type==="fashion") return ["#111827","#DB2777","#FBCFE8"];
        if(type==="tech") return ["#0F172A","#2563EB","#22D3EE"];
        if(type==="cars") return ["#1E293B","#DC2626","#F97316"];
        if(type==="electric") return ["#064E3B","#10B981","#A7F3D0"];
        if(type==="vintage") return ["#7C2D12","#D97706","#FDE68A"];
        if(type==="startup") return ["#0F172A","#10B981","#FACC15"];
        if(type==="healthcare") return ["#064E3B","#22D3EE","#CFFAFE"];
        if(type==="realestate") return ["#1E293B","#F97316","#FDE68A"];
        if(type==="food") return ["#7C2D12","#F59E0B","#FDE68A"];
        return ["#334155","#7c3aed","#f59e0b"];
      }

      const palette = generatePalette(type);
      const colorsDiv = document.getElementById("colors");
      palette.forEach(color => {
        const div = document.createElement("div");
        div.classList.add("color-box");
        div.style.backgroundColor = color;
        colorsDiv.appendChild(div);
      });

      // Logo
      const logo = document.getElementById("logoDisplay");
      logo.style.background = `linear-gradient(135deg, ${palette[0]}, ${palette[1]})`;
      logo.innerText = "★";
    }
  </script>

</body>
</html>
