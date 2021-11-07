import { addons } from '@storybook/addons';

// Simulate sessionStorage having panelPosition set to 'bottom'
sessionStorage.setItem('@storybook/ui/store', JSON.stringify(
  {layout: { panelPosition: 'bottom' } }
));

// In config, set panelPosition to 'right'
addons.setConfig({
  panelPosition: 'right',
});
