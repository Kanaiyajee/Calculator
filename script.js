    function calc() {
        let i1 = document.getElementById("a2").value;
        let i2 = document.getElementById("a3").value;
        let sum = i1 * i2;
        document.getElementById("m").value = sum;
        return sum;

    }
    function calc1() {
        let i3 = document.getElementById("a5").value;
        let i4 = document.getElementById("a6").value;
        let sum1 = i3 * i4;
        document.getElementById("m1").value = sum1;
        return sum1;
    }
    function calc2() {
        let i5 = document.getElementById("a8").value;
        let i6 = document.getElementById("a9").value;
        let sum2 = i5 * i6;
        document.getElementById("m2").value = sum2;
        return sum2;
    }
    function calc3() {
        let i7 = document.getElementById("a11").value;
        let i8 = document.getElementById("a12").value;
        let sum3 = i7 * i8;
        document.getElementById("m3").value = sum3;
        return sum3;
    }
    function total() {
        let s = calc();
        let s1 = calc1()
        let s2 = calc2()
        let s3 = calc3();
        let totals = s + s1 + s2 + s3;
        
        document.getElementById("totals").innerText = totals;
    }
