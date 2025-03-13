import { Toggle } from "@/app/components";
import { ProgressBar } from "@/app/components/ProgressBar";
import RadioButtonGroup from "@/app/components/RadioButton/RadioButtonGroup";
import React from "react";

const CustomAIAgentForm = () => {
  return (
    <div className="max-w-[688px] pb-2 lg:py-12">
      <RadioButtonGroup
        title="Tolerance"
        options={["Low Risk", "Medium Risk", "High Risk"]}
      />

      {/* Investment Type Group */}
      <RadioButtonGroup
        title="Investment Type"
        options={["Predefined Strategy", "User-Defined Portfolio"]}
      />

      {/* Goal Type Group */}
      <RadioButtonGroup
        title="Goal Type"
        options={["Short-Term Gains", "Long-Term Gains"]} // Assuming you meant to have a different label for the second option
      />

      {/* Trading Preferences Group */}
      <RadioButtonGroup
        title="Trading Preferences"
        options={["Swing Trading", "Scalping"]}
      />

      {/* DCA Preferences */}
      <h1 className="heading-text mt-8 mb-6">DCA Preferences</h1>
      <div>
        <Toggle />
      </div>

      {/* Take-Profit Conditions */}
      <h1 className="heading-text mt-8 mb-6">Take-Profit Conditions</h1>
      <div className="max-w-[392px]">
        <ProgressBar />
      </div>

      {/* Stop-Loss Conditions */}
      <h1 className="heading-text mt-8 mb-6">Stop-Loss Conditions</h1>
      <div className="max-w-[392px]">
        <ProgressBar />
      </div>

      {/* Auto-Exit Conditions */}
      <h1 className="heading-text mt-8 mb-6">Auto-Exit Conditions</h1>
      <div>
        <Toggle />
      </div>
    </div>
  );
};

export default CustomAIAgentForm;
