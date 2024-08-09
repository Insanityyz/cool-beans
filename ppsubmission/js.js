        document.getElementById('passwordForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const password = btoa(document.getElementById('password').value.trim());

            const ppurls = {
                'ZXhvdGljYnV0dGVycy4zMWQ=': 'aHR0cHM6Ly9teWFwcHMuc2t0Y28uY29t',
                'eW9sa2JlYXN0LjU/': 'aHR0cHM6Ly9wcm94eS1jcmVhdG9yLXJhbW1lci5wcml2YXRlaW1wb3J0Lmpw',
                'Zm9yemE=': 'aHR0cHM6Ly9sb2dpbi5nYmxhbmRzY2FwZS5jb20='
            };

            const urlsnips = {
                'ZXhvdGljYnV0dGVycy4zMWQ=': 'sktco',
                'eW9sa2JlYXN0LjU/': 'privateimport',
                'Zm9yemE=': 'blandscape'
            };

            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('noLinkMessage').style.display = 'none';
            document.getElementById('redirectingMessage').style.display = 'none';

            if (password === '') {
                document.getElementById('errorMessage').textContent = 'Please enter a proxy password.';
                document.getElementById('errorMessage').style.display = 'block';
                return;
            }

            if (ppurls.hasOwnProperty(password)) {
                document.getElementById('snippet').innerText = urlsnips[password];
                document.getElementById('redirectingMessage').style.display = 'block';

                setTimeout(() => {
                    const decodedUrl = atob(ppurls[password]);
                    window.location.href = decodedUrl;
                }, 2500);
            } else {
                document.getElementById('noLinkMessage').style.display = 'block';
            }
        });

        function showEmbed() {
            const embedContainer = document.getElementById('embedContainer');
            const wbl = 'aHR0cHM6Ly9lLndpZGdldGJvdC5pby9jaGFubmVscy8xMjcwODY2MDU0NzE2OTg1Mzg0LzEyNzA4NjYwNTQ3MTY5ODUzODc=';
            document.getElementById('wB').src = atob(wbl);
            embedContainer.style.display = embedContainer.style.display === 'none' ? 'block' : 'none';
        }
