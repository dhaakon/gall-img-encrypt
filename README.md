Image Message Encryption
----

For this task I have a utility with 2 functions - encode and decode.
Encode receives 2 parameters - an image location and a message. It
returns s location to the encoded image. Located for now in the /tmp
folder with a `encode` appended to the original filename. For this
technique I decode the image Buffer Array to a base64 string. I add a
split key ('imageCode&') to the  message and then encode that string 
to Base64 and concatenate it to the image string. The concatenated 
base64 string is put into a Buffer then saved as a file with 
the original extension.

The decode function receives only the image location. It returns the
ecrypted message. I does this by converting the image to a base64 string
and then splitting that string by the split key.

Usage
----

```
npm install
npm run encode {imgLocation} {msg}
npm run decode {imgLocation}

```

Issues
----

The last character or bit in the base64 seems to be lost in the
conversion. This maybe the utility I'm using but I'm sure there is a
solution.

Other Thoughts
----

This technique could be done completely on the Front end. A user could
drag an image onto the browser and then add a message and have a more
friendly user interface. This could also live on a node server. If I had
more time I would have added a simple command line prompt to this
utility.
