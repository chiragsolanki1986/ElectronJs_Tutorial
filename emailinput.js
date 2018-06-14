let $ = require('jquery')
let fs = require('fs')
let filename = 'contacts'
let sno = 0

//Clicking Add button
$('#add-to-list').on('click', ()=>{
    let name = $('#Name').val()
    let email = $('#Email').val()


    fs.appendFile('contacts', name + ',' + email +'\n')

    addEntry(name, email)
})

//Add Entry to file
function addEntry(name, email) {
    if(name && email){
        
        sno++
        let updatestring = '<tr><td>'+sno+'</td><td>'+name+ '</td><td>' + email + '</td></tr>'
        $('#contact-table').append(updatestring)
    }    
}

//Load existing contacts
function loadAndDisplayContacts() {
        
    if(fs.existsSync(filename)){
        
        let data = fs.readFileSync(filename,'utf8').split('\n')

        data.forEach((contact, index) => {
            let [name, email] = contact.split(',')
            addEntry(name, email)
        })

    }
    else {
        
        console.log('Contact file does not exist. Creating the file');
        fs.writeFile(filename,'',(err) => {
            if(err)
                console.log(err)
                alert(err)
        })
    }
}

loadAndDisplayContacts()