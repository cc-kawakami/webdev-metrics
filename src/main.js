import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import devMetrics from './data/dev-metrics.json'

createApp(App, {
  title: 'WebDev Metrics',
  metrics: devMetrics,
  langs: ['en', 'ja']
}).mount('#app')
