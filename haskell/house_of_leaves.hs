punctuation = "',.?-!&:;()"
is_punct c = elem c punctuation

alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
is_alpha c = elem c alphabet

decipher ciphertext = decrypt ciphertext "" False

decrypt                     :: String -> String -> Bool -> String
-- Just give me the plaintext if I'm out of ciphertext
decrypt "" plain in_word                   = plain
-- Drop character and keep going if we're in a word and encounter a letter
decrypt (c:cs) plain True    | is_alpha c  = decrypt cs plain True
-- A letter is a word edge if we aren't in a word
decrypt (c:cs) plain False   | is_alpha c  = decrypt cs (plain ++ [c]) True   
-- Punctuation is saved but takes us out of a word
decrypt (c:cs) plain in_word | is_punct c  = decrypt cs (plain ++ [c]) False 
-- Spaces are discarded but take us out of a word
decrypt (c:cs) plain in_word | c == ' '    = decrypt cs plain False 


encipher        :: String -> String
encipher plain  = encrypt plain ""

encrypt    :: String -> String -> String
encrypt "" cipher                    = cipher
encrypt (p:ps) cipher  | p == ' '    = encrypt ps cipher
encrypt (p:ps) cipher  | is_alpha p  = encrypt ps (cipher ++ [p] ++ "idigi ")
encrypt (p:ps) cipher  | is_punct p  = encrypt ps (cipher ++ [p, ' '])  

