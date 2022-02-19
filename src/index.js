import faker from 'faker';

const contents = `<div style="display: flex; gap:1rem">
                    My name is: ${faker.name.findName()}</span>
                 </div>`

document.querySelector('#target-element').innerHTML = contents;