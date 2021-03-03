# AddressBook code test

Installation
> npm install

Running project
> npm run dev

# Side notes
I decided to store nationality in url, could do it in local storage.

The tests are not covering 100% as I didn't wanted to spent too much time on it as I extra tasks, which consumed more time tha I would wish to spend on code test.
I tried to write one more advanced test - to test url param.
One test to show styling change.
To test the rest api call I would probably use https://www.npmjs.com/package/msw.
For E2E I would setup playwright as I prefer it over cypress https://github.com/microsoft/playwright

I did shortcut with modal, I didn't wanted to use any external libarary.
And to write proper modal you have to mount it in root dom + probably use some portal. I couldn't do the simplified as from within table 
you cannot simply render div. So I put component on the table leve. I would not go with that implementation in 'real' project.

Everythin you see is setup from the scratch without any helpers except
> npm init

> jest init

> tsc --init

I didn't prepare building of the project, but I believe this is not necessary here.

I added some extra counters to tract what is going on in the app.
I hope that they will not be misread, as the code is doing prefetching well.
It can be nicely observed by slowing down network in dev tools.
New rest call is made when user will scroll to the bottom of the table. At that moment prefetched users will be joined to the users. I should be clear from the code.