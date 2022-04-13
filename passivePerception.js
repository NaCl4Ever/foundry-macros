let tableRows = '';
for( const token of canvas.tokens.controlled) {
  const {data: {abilities}, name} = token.actor.data;

  tableRows += `
  <tr>
    <td style="text-align:center"> ${name} </td>
    <td style="text-align:center"> ${abilities.wis.mod}  </td>
  </tr>`
}
const template = `
<div>
   <table>
   <thead>
      <tr>
          <th style="text-align:center">Name</th>
          <th style="text-align:center">Passive Perception</th>
      </tr>
   </thead>
   <tbody>
   ${tableRows}
   </tbody>
   </table>
</div>`
new Dialog({
  title: 'Passive Perception',
  content: template,
  buttons: {
    cancel: {
      icon: '<i class="fas fa-times"></i>',
      label: 'Cancel',
      callback: async (html) => {
        console.log('canceled')
        callback(null)
      },
    },
  },
  default: 'cancel',
}).render(true)