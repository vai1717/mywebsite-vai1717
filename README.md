Hey! Welcome to my website! There's information about me, my hobbies, etc.. 
for the side quests part, if you hover over each hobby, theres a picture of me with a small description!
the cv is directly downloaded into the device that is using the website
for the text analyzer, the wording was quite ambigous about 10,000 words so it just allows any number of words and just says place your text here..
For each event, the following details are logged:  
     *Timestamp:* The exact date and time when the event occurred.  
     *Type of Event:* Either ⁠ "click" ⁠ or ⁠ "view" ⁠.  
     *Event Object Description:* A textual description or identification of the element (e.g., tag name, class, or id) that was interacted with.

Only the primary (first-level) event is logged. Events that propagate or bubble up from nested elements are recorded only once to prevent duplication.
   - Event delegation is used to attach a single handler at the document level, simplifying the logging mechanism.

- The script assumes that each element can be adequately identified by basic properties such as its HTML tag, id, class, or a combination thereof.  
   - For complex UI components (like drop-down menus or custom widgets), a descriptive label or a custom attribute is assumed to be available to aid in identification.



