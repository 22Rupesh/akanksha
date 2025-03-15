import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#e6f2f2]">
      {/* Header Section */}
      <header className="bg-[#3b4278] text-white py-8 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Hypothyroidism</h1>
        <div className="max-w-3xl mx-auto bg-white/20 p-6 rounded-lg">
          <h2 className="text-2xl italic">
            "Empower Your Health, Balance Your Thyroid – Take Control of Hypothyroidism!"
          </h2>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-8">
        {/* Treatment Section */}
        <div className="bg-[#3b4278] rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">TREATMENT</h2>
          <div className="bg-white rounded-lg p-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
              alt="Medication"
              className="w-full h-48 object-cover rounded mb-4"
            />
          </div>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">1. Antithyroid medications:</span> reduce thyroid hormone production.
            </li>
            <li>
              <span className="font-bold">2. Beta-blockers:</span> manage symptoms like rapid heartbeat and tremors.
            </li>
            <li>
              <span className="font-bold">3. Surgery (thyroidectomy):</span> partial or total removal of the thyroid gland in severe cases.
            </li>
            <li>
              <span className="font-bold">4. Lifestyle adjustments:</span> balanced diet, management, and regular follow-ups.
            </li>
          </ul>
        </div>

        {/* Causes Section */}
        <div className="bg-[#3b4278] rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">CAUSES</h2>
          <div className="bg-white/90 rounded-lg p-4 text-black mb-4">
            <p className="mb-4">A condition where the thyroid gland overproduces hormones, accelerating metabolism.</p>
            <ul className="space-y-3">
              <li>
                <span className="font-bold">1. Graves' Disease:</span> An autoimmune disorder triggering excess hormone production
              </li>
              <li>
                <span className="font-bold">2. Toxic Nodular Goiter:</span> overactive thyroid nodules independent of regulation (TSH) Thyroid Stimulating Hormone
              </li>
              <li>
                <span className="font-bold">3. Axis Iodine:</span> from diet supplements are medications influencing hormone level
              </li>
              <li>
                <span className="font-bold">4. Medications:</span> some drugs and therapies can induce hypothyroidism
              </li>
            </ul>
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="bg-[#3b4278] rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">SYMPTOMS</h2>
          <div className="bg-white/90 rounded-lg p-4 text-black">
            <ul className="space-y-3">
              <li>
                <span className="font-bold">• Rapid heartbeat:</span> palpitations or irregular heart rhythm
              </li>
              <li>
                <span className="font-bold">• Unintended Weight loss:</span> despite normal or increased appetite
              </li>
              <li>
                <span className="font-bold">• Nervousness/Irritability:</span> Anxiety, shakiness, or tremors in hand
              </li>
              <li>
                <span className="font-bold">• Heat Intolerance:</span> excessive sweating and feeling hot
              </li>
            </ul>
          </div>
          
          <div className="mt-6 bg-[#7fcdee] p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">HYPERTHYROIDISM SYMPTOMS</h3>
            <ul className="space-y-1 text-sm">
              <li>• FATIGUE</li>
              <li>• WEIGHT LOSS</li>
              <li>• SENSITIVITY TO COLD</li>
              <li>• DEPRESSION</li>
              <li>• MEMORY PROBLEMS</li>
              <li>• GOITER</li>
              <li>• HAIR LOSS</li>
              <li>• MUSCLE PAIN</li>
              <li>• TREMBLING HANDS</li>
              <li>• INFERTILITY</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white rounded-lg shadow-lg p-4 max-w-xs mx-auto text-center mb-8">
        <p className="font-bold">Department of Home Science</p>
        <p>Prepared by Akanksha Bharti</p>
      </footer>
    </div>
  );
}

export default App;