import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

function Goals() {
  const categories = {
    "Programming Languages": ["Python", "C++", "MATLAB", "Java", "R", "Julia"],
    "Libraries & Frameworks": [
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-image",
      "Dlib",
      "Theano",
      "MXNet",
      "Caffe",
      "PaddlePaddle",
    ],
    Hardware: ["GPUs", "TPUs", "Edge Devices"],
    "Cloud Services": [
      "AWS Rekognition",
      "Google Cloud Vision AI",
      "Microsoft Azure Computer Vision",
      "IBM Watson Visual Recognition",
    ],
    "Image Annotation Tools": [
      "Labelbox",
      "SuperAnnotate",
      "CVAT",
      "VIA",
      "RectLabel",
    ],
    "Version Control & Collaboration": [
      "Git",
      "GitHub",
      "GitLab",
      "DVC",
      "MLflow",
    ],
    "Other Tools": [
      "YOLO",
      "Detectron2",
      "FastAI",
      "OpenPose",
      "MediaPipe",
      "DeepStream SDK",
      "NVIDIA Triton",
    ],
  };

  const initialState = Object.values(categories)
    .flat()
    .reduce((acc, item) => {
      acc[item] = false;
      return acc;
    }, {});

  const [checked, setChecked] = useState(initialState);

  const toggle = (item) => {
    setChecked((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const total = Object.keys(checked).length;
  const completed = Object.values(checked).filter(Boolean).length;
  const progress = (completed / total) * 100;

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#1f0d1f] via-[#020617] to-black text-white rounded-[30px] p-4 md:p-8">

        <div className="max-w-5xl mx-auto space-y-8">

          {/* HEADER */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              My Tech Goals 🎯
            </h1>
            <p className="text-gray-400">
              Tools and technologies I want to master
            </p>
          </div>

          {/* PROGRESS */}
          <div className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between mb-2">
              <span>Goal Progress</span>
              <span>{completed}/{total} completed</span>
            </div>

            <div className="w-full bg-[#374151] h-4 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* CATEGORIES */}
          {Object.entries(categories).map(([category, items]) => (
            <div
              key={category}
              className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4">{category}</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {items.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 bg-[#111c33] border border-[#2b3a55] p-3 rounded-2xl cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checked[item]}
                      onChange={() => toggle(item)}
                      className="w-5 h-5 accent-green-400"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </MainLayout>
  );
}

export default Goals;