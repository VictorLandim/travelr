(function() {
    document.addEventListener('DOMContentLoaded', main);

    function main() {
        var elements = document.querySelectorAll('.expand-card');

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('mouseover', function() {
                var isOne = this.classList.contains('expand-card--one');
                var value = isOne ? '15rem' : '-15rem';
                var element = isOne
                    ? document.querySelector('.expand-card--two')
                    : document.querySelector('.expand-card--one');
                element.style.transform = 'translateX(' + value + ')';
                this.style.transform = 'scaleX(1.8)';
            });
            elements[i].addEventListener('mouseout', function() {
                var isOne = this.classList.contains('expand-card--one');
                var element = isOne
                    ? document.querySelector('.expand-card--two')
                    : document.querySelector('.expand-card--one');
                element.style.transform = '';
                this.style.transform = 'scaleX(1)';
            });
        }
    }
})();
