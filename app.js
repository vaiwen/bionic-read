const normalText = document.querySelector('#normal-text')
const bionicText = document.querySelector('#bionic-text')

const vowels = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü', 'A', 'E', 'I', 'İ', 'O', 'Ö', 'U', 'Ü']

const syllable = (word) => {

    let syl = ''
    let syl2 = ''

    while (word.length > 0) {

        let x = ''
        let y = 0
        syl = ''

        let z = 0

        let newWord = ''

        for (let index = 0; index < word.length; index++) {
            vowels.forEach(vowelLetter => {
                if (word[index] == vowelLetter) {
                    x = word[index]
                    y = index
                }
            })
        }

        syl += x
        console.log(x)
        console.log(y)


        console.log(word)
        if (y + 1 == word.length) {
            // t = word.length - 1
        }
        else {
            for (let index = y + 1; index < word.length; index++) {
                syl += word[index]
            }
        }

        let confirm = false

        vowels.forEach(vowelLetter => {  

            if (y - 1 < 0) {
                confirm = true
            }
            else {
                if (word[y - 1] == vowelLetter) {
                    confirm = true
                }
                else {

                }
            }
        })

        if (confirm) {

        }
        else {
            z = y - 1
            syl = `${word[y - 1]}${syl}`
        }

        for (let t = 0; t < z; t++) {
            newWord += word[t]
        }
        word = newWord


        if (word.length == 0) {

        }
        else {
            syl2 = `${syl}${syl2}`
        }
    }

    const strong = document.createElement('strong')
    strong.style.fontWeight = "900"
    strong.textContent = syl
    bionicText.appendChild(strong)

    const normal = document.createElement('span')
    normal.textContent = `${syl2} `
    bionicText.appendChild(normal)

}

normalText.addEventListener('change', (e) => {
    bionicText.textContent = ''
    let words = normalText.value.split(' ')
    console.log(words)

    words.forEach(item => {
        syllable(item)
    });

})

{/* <div contenteditable="true"> */ }
