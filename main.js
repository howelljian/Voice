async function speakText(text) {
  const apiKey = "sk_2593ccf88ddbbdeb475cab3eac854d9dea018e11ad627d57";
  const voiceID = "";

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.5 },
      }),
    });

    if (!response.ok) {
      console.error("API Error:", await response.text());
      return;
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    console.error("Request Failed:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("speakBtn").addEventListener("click", function () {
    const speech = document.getElementById("file").value;
    speakText(speech);
  });
  document.getElementById("1").addEventListener("click", function () {
    voiceID = "cLCuNe0GeCZkd2MXpQWN";
  });
  document.getElementById("2").addEventListener("click", function () {
    voiceID = "Xb7hH8MSUJpSbSDYk0k2";
  });
  document.getElementById("3").addEventListener("click", function () {
    voiceID = "Xb7hH8MSUJpSbSDYk0k2";
  });
  document.getElementById("4").addEventListener("click", function () {
    voiceID = "E0ZZCvhDvkmk5UWzzB7JN";
  });
  document.getElementById("5").addEventListener("click", function () {
    voiceID = "Xb7hH8MSUJpSbSDYk0k2";
  });
  document.getElementById("6").addEventListener("click", function () {
    voiceID = "Xb7hH8MSUJpSbSDYk0k2";
  });

});