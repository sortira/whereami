        document.querySelectorAll('.json-key').forEach(key => {
            key.addEventListener('click', () => {
                const item = key.parentElement;
                item.classList.toggle('open');

                if (item.classList.contains('open')) {
                    item.querySelector('.json-value').style.display = 'block';
                } else {
                    item.querySelector('.json-value').style.display = 'none';
                }
            });
        });
