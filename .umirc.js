
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'TheWavePro_cms',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  base: '/thewave/',
  publicPath: '/thewave/',
}
