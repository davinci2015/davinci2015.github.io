import "./style.css";

(function () {
    var message = {
        message: [
            "developing web applications",
            "working on exciting and challenging projects",
            "a transparent and team-work oriented company culture",
            "to give presentations about software development",
            "spring without too much rain",
            "a fruit tea",
        ],
        counterS: 0,
        counterL: 0,
        deleteS: false,

        init: function () {
            this.cacheElem();
            this.type();
        },

        cacheElem: function () {
            this.$text = document.querySelector(".text");
        },

        type: function () {
            var message = this.message[this.counterS],
                that = this,
                speed = 0;

            message = !this.deleteS
                ? message.slice(0, ++this.counterL)
                : message.slice(0, --this.counterL);
            if (this.message[this.counterS] != message && !this.deleteS) {
                this.$text.innerHTML = message;
                speed = 50;
            } else {
                speed = this.message[this.counterS] == message ? 800 : 30;
                this.deleteS = true;
                this.$text.innerHTML = message;
                if (message == "") {
                    this.deleteS = false;
                    this.counterS =
                        this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
                }
            }
            setTimeout(function () {
                that.type();
            }, speed);
        }
    };
    message.init();
})();
