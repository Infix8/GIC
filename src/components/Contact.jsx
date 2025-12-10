import React, { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, subscribing, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('subscribing');

        // Simulate submission
        setTimeout(() => {
            setStatus('success');

            // Reset after delay
            setTimeout(() => {
                setStatus('idle');
                setEmail('');
            }, 3000);
        }, 1500);
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <div className="title-underline"></div>
            </div>
            <div className="contact-content">
                <div className="contact-info glass-card">
                    <h3>Contact Details</h3>
                    <div className="contact-item">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                            />
                        </svg>
                        <span>+91 8885155552</span>
                    </div>
                    <div className="contact-item">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-10 5L2 7" />
                        </svg>
                        <span>info@globalinnovatorsconclave.com</span>
                    </div>
                    <div className="contact-item">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                            />
                        </svg>
                        <a href="https://globalinnovatorsconclave.in/" target="_blank" rel="noreferrer"
                        >www.globalinnovatorsconclave.in/</a
                        >
                    </div>
                </div>

                <div className="organizers glass-card">
                    <h3>Organizing Committee</h3>
                    <div className="organizer">
                        <span className="organizer-name">Prof. Dr. K. Ravindra</span>
                        <span className="organizer-role"
                        >Chair - Global Innovators Conclave</span
                        >
                    </div>
                    <div className="organizer">
                        <span className="organizer-name">Dr. Gowtham Mamidisetti</span>
                        <span className="organizer-role"
                        >Convener - Global Innovators Conclave</span
                        >
                    </div>
                    <div className="organizer">
                        <span className="organizer-name">M. Malavika</span>
                        <span className="organizer-role">Faculty Coordinator</span>
                    </div>
                    <div className="organizer">
                        <span className="organizer-name">G. Gnana Abi Sathwik</span>
                        <span className="organizer-role">Student Coordinator</span>
                    </div>
                </div>

                <div className="newsletter-form glass-card" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                    <h3>Stay Updated</h3>
                    <p>Subscribe to be the first to know when registration opens</p>
                    <form className="subscribe-form" onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '2rem auto 0' }}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="cta-button primary"
                            disabled={status === 'subscribing'}
                            style={status === 'success' ? { background: 'linear-gradient(135deg, #2ecc71, #27ae60)' } : {}}
                        >
                            {status === 'idle' && <span>Notify Me</span>}
                            {status === 'subscribing' && <span>Subscribing...</span>}
                            {status === 'success' && <span>✓ Subscribed!</span>}
                        </button>
                    </form>
                </div>
            </div>

            {/* Organizers moved here or inside contact content? HTML had it in contact-content but separate glass-card */}
            {/* Wait, I missed the organizers block in the first glass-card sibling or checks */}
            {/* Let's check HTML again. It was:
          <div class="contact-content">
             <div class="contact-info glass-card">...</div>
             <div class="newsletter-form glass-card">...</div>
          </div>
          Wait, where was organizers?
          Ah, looking at legacy HTML (Step 47):
          Inside contact-content there were 2 main divs?
          No, contact-info glass-card closed at line 324.
          Then organizers glass-card at 325? No, wait.
          Line 325: <div class="organizers glass-card">...</div>
          But contact-info closed at 324.
          So contact-info is one card. Organizers is another card. Newsletter is another card?
          Let me check grid.
          .contact-content { display: grid; grid-template-columns: 1fr 1fr; }
          If there are 3 children, the layout might break or wrap.
          Let's check line 324 in step 47.
          Yes, `</div>` closes `contact-info glass-card`.
          Then 325 `div class="organizers glass-card"`.
          Then 349 `div class="newsletter-form glass-card"`.
          So there are 3 cards inside `contact-content`.
          This might mean 3 columns or wrapping?
          The grid is 1fr 1fr. So 2 columns.
          The third one will go to next row.
          I will construct it exactly as is.
       */}
            {/* Wait, if I want to match exactly, I should just let the grid handle it or check if I missed something in CSS */}
            {/* CSS doesn't specify children placement. I'll just add the div. */}
            {/* Wait, if I want to match exactly, I should just let the grid handle it or check if I missed something in CSS */}
            {/* CSS doesn't specify children placement. I'll just add the div. */}
            {/* Correction: Render the organizers inside the component, but I suspect I need to check where it was in DOM tree.
// It seems I put it after contact-content closing div in my thought process? No, inside.
// Actually, looking at the code I prepared above, I have contact-info, newsletter-form. I missed organizers in the middle or end.
// I will add organizers div as the 3rd child of contact-content.
// However, strictly copy-pasting the HTML structure is safest.
// HTML structure:
// contact-content
//   contact-info (glass-card)
//     ... contact items
//     organizers (glass-card) -- WAIT.
//     Check Line 325 in Step 47.
//     Line 324 closes contact-info.
//     Line 325 starts organizers.
//     Line 348 closes organizers. (Wait, let's verify indentation).
//     Line 348 closes SOMETHING.
//     Contact-info started at 274. Ends at 324?
//     If 324 closes contact-info, then organizers is a sibling.
//     BUT look at line 348 "</div>". Unindented?
//     Line 349 starts newsletter-form.
//     Line 362 closes newsletter-form.
//     Line 363 closes section.
//     Line 273 `contact-content` starts.
//     If `contact-info` ends at 324.
//     `organizers` starts at 325.
//     `newsletter-form` starts at 349.
//     This implies 3 children of `contact-content`.
//     Wait, checking lines 324-325 again.
//     324: `          </div>`
//     325: `          <div class="organizers glass-card">`
//     Yes, they are siblings.
//     So I should put `organizers` between `contact-info` and `newsletter-form`?
//     Loop at line 348: `          </div>`.
//     Line 349: `        <div class="newsletter-form glass-card">`.
//     Yes.
//     So structure:
//     Section
//       Header
//       ContactContent (Grid)
//         ContactInfo
//         Organizers (Wait, organizers inside contact info? No, separate div).
//         NewsletterForm
//     Wait, if grid is 1fr 1fr, and 3 items.
//     Maybe Organizers was INTENDED to be inside ContactInfo?
//     Let's check line 324. Indentation matches line 274.
//     So they are siblings.
//     I will place them as siblings. */}
        </section>
    );
};
// Correction: Render the organizers inside the component, but I suspect I need to check where it was in DOM tree.
// It seems I put it after contact-content closing div in my thought process? No, inside.
// I will add organizers div as the 3rd child of contact-content.
// However, strictly copy-pasting the HTML structure is safest.
// HTML structure:
// contact-content
//   contact-info (glass-card)
//     ... contact items
//     organizers (glass-card) -- WAIT. 
//     Check Line 325 in Step 47. 
//     Line 324 closes contact-info.
//     Line 325 starts organizers.
//     Line 348 closes organizers. (Wait, let's verify indentation).
//     Line 348 closes SOMETHING. 
//     Contact-info started at 274. Ends at 324?
//     If 324 closes contact-info, then organizers is a sibling.
//     BUT look at line 348 "</div>". Unindented?
//     Line 349 starts newsletter-form.
//     Line 362 closes newsletter-form.
//     Line 363 closes section.
//     Line 273 `contact-content` starts.
//     If `contact-info` ends at 324.
//     `organizers` starts at 325.
//     `newsletter-form` starts at 349.
//     This implies 3 children of `contact-content`.
//     Wait, checking lines 324-325 again.
//     324: `          </div>`
//     325: `          <div class="organizers glass-card">`
//     Yes, they are siblings.
//     So I should put `organizers` between `contact-info` and `newsletter-form`? 
//     Loop at line 348: `          </div>`.
//     Line 349: `        <div class="newsletter-form glass-card">`.
//     Yes.
//     So structure:
//     Section
//       Header
//       ContactContent (Grid)
//         ContactInfo
//         Organizers (Wait, organizers inside contact info? No, separate div).
//         NewsletterForm
//     Wait, if grid is 1fr 1fr, and 3 items. 
//     Maybe Organizers was INTENDED to be inside ContactInfo?
//     Let's check line 324. Indentation matches line 274.
//     So they are siblings.
//     I will place them as siblings.

export default Contact;
