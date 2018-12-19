require(["../scripts/config.js"], function () {
    require(["jquery", "cookie", "benlailife"], function ($, cookie) {
        class active {
            constructor(obj) {
                this.year = obj.year;
                this.month = obj.month;
                this.day = obj.day;
                this.hour = obj.hour;
                this.min = obj.min;
                this.second = obj.second;
            }
            set_end_time() {
                let d = new Date();
                d.setFullYear(this.year);
                d.setMonth(this.month);
                d.setDate(this.day);
                d.setHours(0);
                d.setMinutes(0);
                d.setSeconds(0);
                this.end_time = d.getTime();
                return this;
            }
            storage() {
                cookie.setCookie("active_time", this.end_time, 15);
                return this;
            }
            get_time() {
                this.differ();
                setInterval(() => {
                    this.differ();
                }, 1000)
            }
            differ() {
                let d = new Date();
                this.now_time = d.getTime();
                let t = this.end_time - this.now_time;
                let day = parseInt(t / 1000 / 3600 / 24);
                $(".active_time a").eq(0).html(parseInt(t / 1000 / 3600 / 24));
                let hour = parseInt((t - day * 24 * 3600 * 1000) / 1000 / 3600);
                $(".active_time a").eq(1).html( this.createZero(hour) );
                let minuts = parseInt((t - day * 24 * 3600 * 1000 - hour * 3600 * 1000) / 1000 / 60);
                $(".active_time a").eq(2).html( this.createZero(minuts) );
                let second = parseInt((t - parseInt(t / 1000 / 60) * 60 * 1000) / 1000);
                $(".active_time a").eq(3).html( this.createZero(second) );
            }
            createZero(num){
                num = num<10?"0"+num:""+num;
                return num;
            }
        }

        new active({
            year: 2019,
            month: 0,
            day: 1,
            hour: 0,
            min: 0,
            second: 0
        }).set_end_time().storage().get_time();

    })
})