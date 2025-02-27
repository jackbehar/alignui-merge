module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.jsx',
          'src/components/ButtonGroup/ButtonGroup.jsx',
          'src/components/ButtonGroupItem/ButtonGroupItem.jsx',
          'src/components/ButtonGroupIcon/ButtonGroupIcon.jsx',
          'src/components/Checkbox/Checkbox.jsx',
          'src/components/Switch/Switch.jsx',
          'src/components/RadioGroup/RadioGroup.jsx',
          'src/components/RadioGroup/Item/Item.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
    settings: { useUXPinProps: true },
  },
  name: 'Example Design System',
};
