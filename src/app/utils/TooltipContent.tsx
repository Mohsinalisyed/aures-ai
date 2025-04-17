// src/app/components/Tooltip/TooltipContent.tsx
import React from "react";

export const TOOLTIP_CONTENT = {
  tradingAmount: (
    <div className="text-white text-sm">
      Specify the fixed amount of ETH the AI agent will use for each trade. This
      is not the total balance, but the per-trade allocation the agent operates
      with.
    </div>
  ),

  tolerance: (
    <div className="text-white text-sm">
      <p>Select your preferred risk level for asset allocation:</p>
      <ul className="list-disc pl-4 mt-1 space-y-1">
        <li>
          <strong>Low Risk:</strong> Prioritizes high-liquidity, stable tokens
          with minimal volatility.
        </li>
        <li>
          <strong>Medium Risk:</strong> Balances between stability and moderate
          price fluctuations.
        </li>
        <li>
          <strong>High Risk:</strong> Includes small-cap, low-liquidity tokens
          targeting higher potential returns.
        </li>
      </ul>
      <p className="mt-2">
        Risk is primarily assessed based on token liquidity—higher liquidity
        generally implies lower risk.
      </p>
    </div>
  ),

  investmentType: (
    <div className="text-white text-sm">
      <p>Choose how your portfolio is managed:</p>
      <ul className="list-disc pl-4 mt-1 space-y-1">
        <li>
          <strong>Predefined Strategy:</strong> Aureus AI auto-allocates across
          trusted tokens based on your selected risk level.
        </li>
        <li>
          <strong>User-Defined Portfolio:</strong> Manually choose and allocate
          specific tokens according to your preferences.
        </li>
      </ul>
    </div>
  ),

  goalType: (
    <div className="text-white text-sm">
      <p>Define your investment objective:</p>
      <ul className="list-disc pl-4 mt-1 space-y-1">
        <li>
          <strong>Short-Term Gains:</strong> Focuses on quick trade cycles and
          fast exits.
        </li>
        <li>
          <strong>Long-Term Gains:</strong> Aims for gradual portfolio growth
          through larger, less frequent positions.
        </li>
      </ul>
    </div>
  ),

  dcaPref: (
    <div className="text-white text-sm">
      Enable Dollar-Cost Averaging (DCA) to automatically purchase more of a
      token after price drops.
      <p className="mt-2">
        When active, the AI agent buys additional units every time the asset
        drops by 10%.
      </p>
      <p className="mt-2">
        Set how many times this re-buy should occur per asset after each 10%
        decline. This helps manage risk exposure and reduce average entry cost.
      </p>
    </div>
  ),

  takeProfit: (
    <div className="text-white text-sm">
      Set the target profit percentage at which the agent will automatically
      exit a position.
      <p className="mt-2">
        For example, a 10% setting means the agent will sell once the token’s
        price increases by 10% from the entry point.
      </p>
    </div>
  ),

  stopLoss: (
    <div className="text-white text-sm">
      Set the maximum acceptable loss before the agent exits a position.
      <p className="mt-2">
        For example, -10% means the asset will be sold if it drops 10% below the
        purchase price, limiting further downside.
      </p>
    </div>
  ),

  autoExit: (
    <div className="text-white text-sm">
      Enable to automatically exit all open positions if the market shows
      extreme volatility.
      <p className="mt-2">
        This is triggered when your total portfolio experiences a drawdown of
        more than 20% within a 24-hour period.
      </p>
    </div>
  ),
};
