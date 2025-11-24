import React from 'react';
import { Ruler } from 'lucide-react';

const SizeGuide: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Ruler size={32} />
          <h1 className="font-display font-bold text-4xl md:text-5xl uppercase text-center">Size Guide</h1>
        </div>
        <p className="text-gray-500 text-center mb-12">
          All our products are designed with an oversized fit. We recommend sticking to your usual size for the intended baggy look, or sizing down for a regular fit.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-12">
          <h3 className="bg-brand-black text-white p-4 font-bold uppercase tracking-widest text-center">Oversized T-Shirts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-6 py-4">Size</th>
                  <th className="px-6 py-4">Chest (Inches)</th>
                  <th className="px-6 py-4">Length (Inches)</th>
                  <th className="px-6 py-4">Shoulder (Inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">S</td>
                  <td className="px-6 py-4">44</td>
                  <td className="px-6 py-4">28</td>
                  <td className="px-6 py-4">21</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">M</td>
                  <td className="px-6 py-4">46</td>
                  <td className="px-6 py-4">29</td>
                  <td className="px-6 py-4">22</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">L</td>
                  <td className="px-6 py-4">48</td>
                  <td className="px-6 py-4">30</td>
                  <td className="px-6 py-4">23</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">XL</td>
                  <td className="px-6 py-4">50</td>
                  <td className="px-6 py-4">31</td>
                  <td className="px-6 py-4">24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <h3 className="bg-brand-black text-white p-4 font-bold uppercase tracking-widest text-center">Hoodies</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-6 py-4">Size</th>
                  <th className="px-6 py-4">Chest (Inches)</th>
                  <th className="px-6 py-4">Length (Inches)</th>
                  <th className="px-6 py-4">Sleeve (Inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">M</td>
                  <td className="px-6 py-4">46</td>
                  <td className="px-6 py-4">28</td>
                  <td className="px-6 py-4">24</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">L</td>
                  <td className="px-6 py-4">48</td>
                  <td className="px-6 py-4">29</td>
                  <td className="px-6 py-4">25</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">XL</td>
                  <td className="px-6 py-4">50</td>
                  <td className="px-6 py-4">30</td>
                  <td className="px-6 py-4">26</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;