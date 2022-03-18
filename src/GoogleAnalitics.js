export const sendMetric = (action, category, label, value) => {
   const values = {}
   if(typeof category !== 'undefined'){
       values["event_category"] = category
   }
   if(typeof label !== 'undefined'){
       values["event_label"] = label
   }
   if(typeof value !== 'undefined'){
       values["event_value"] = value
   }
   if(typeof window !== 'undefined' && typeof window.gtag !== 'undefined'){
       window.gtag('event', action, values)
   }else{
       console.log('event', action, values)
   }
}