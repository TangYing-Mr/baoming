window.onload = function(){
	// 考生号
	var inputEmail3 = document.getElementById("inputEmail3");
	var yanzheng01 = document.getElementsByClassName("yanzheng01")[0];
	inputEmail3.onblur=function(){
			var num1 = /^\d{11}$/;
			if (!num1.test(this.value)) 
				{
					yanzheng01.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng01.style.display = "none";
				}
				this.value = this.value;
	}
	// 姓名
	var inputtext3 = document.getElementById("inputtext3");
	var yanzheng02 = document.getElementsByClassName("yanzheng02")[0];
	inputtext3.onblur=function(){
			var num2 = /^([a-zA-Z\u4e00-\u9fa5\·]{2,10})$/;
			if (!num2.test(this.value)) 
				{
					yanzheng02.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng02.style.display = "none";
				}
				this.value = this.value;
	}
	// 民族
	var select_minzu = document.getElementById("select_minzu");
	var select_minzu_opt = select_minzu.children;
	var yanzheng03 = document.getElementsByClassName("yanzheng03")[0];
        select_minzu.onclick = function(){
		if (select_minzu_opt[0].selected) 
			{
				yanzheng03.style.display = "block";
			}else{
				yanzheng03.style.display = "none";
			}
     }

    // 考生类别
	var select_leibie = document.getElementById("select_leibie");
	var select_leibie_opt = select_leibie.children;
	var yanzheng04 = document.getElementsByClassName("yanzheng04")[0];
        select_leibie.onclick = function(){
		if (select_leibie_opt[0].selected) 
			{
				yanzheng04.style.display = "block";
			}else{
				yanzheng04.style.display = "none";
			}
     }

     // 身份证号
	var ID = document.getElementById("ID");
	var yanzheng05 = document.getElementsByClassName("yanzheng05")[0];
	ID.onblur=function(){
			var num3 = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
			if (!num3.test(this.value)) 
				{
					yanzheng05.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng05.style.display = "none";
				}
				this.value = this.value;
	}
    // 毕业时间
	var select_biye = document.getElementById("select_biye");
	var select_biye_opt = select_biye.children;
	var yanzheng06 = document.getElementsByClassName("yanzheng06")[0];
        select_biye.onclick = function(){
		if (select_biye_opt[0].selected) 
			{
				yanzheng06.style.display = "block";
			}else{
				yanzheng06.style.display = "none";
			}
     }
       // 住址电话
	var zuoji = document.getElementById("zuoji");
	zuoji.onblur=function(){
			var num4 = /^(\d{3}-\d{8}|\d{4}-\d{7})$/;
			if (!num4.test(this.value)) 
				{
					this.value="格式错误";
				}else{
					this.value = this.value;
				}
				this.value = this.value;
	}

	  // 手机
	var phone = document.getElementById("phone");
	var yanzheng09 = document.getElementsByClassName("yanzheng09")[0];
	phone.onblur=function(){
			var num9 = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
			if (!num9.test(this.value)) 
				{
					yanzheng09.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng09.style.display = "none";
				}
				this.value = this.value;
	}

	  // 联系电话（手机）
	var lianxidainhua = document.getElementById("lianxidainhua");
	var yanzheng12 = document.getElementsByClassName("yanzheng12")[0];
	lianxidainhua.onblur=function(){
			var num12 = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
			if (!num12.test(this.value)) 
				{
					yanzheng12.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng12.style.display = "none";
				}
				this.value = this.value;
	}

		  // 邮编
	var youbian = document.getElementById("youbian");
	var yanzheng13 = document.getElementsByClassName("yanzheng13")[0];
	youbian.onblur=function(){
			var num13 = /^\d{6}$/;
			if (!num13.test(this.value)) 
				{
					yanzheng13.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng13.style.display = "none";
				}
				this.value = this.value;
	}

	// 第一志愿
	var frist_zhiyuan = document.getElementById("frist_zhiyuan");
	var frist_zhiyuan_opt = frist_zhiyuan.children;
	var yanzheng14 = document.getElementsByClassName("yanzheng14")[0];
        frist_zhiyuan.onclick = function(){
		if (frist_zhiyuan_opt[0].selected) 
			{
				yanzheng14.style.display = "block";
			}else{
				yanzheng14.style.display = "none";
			}
     }
    // 政治面貌
    var zhenzhi = document.getElementById("zhenzhi");
	var yanzheng003 = document.getElementsByClassName("yanzheng003")[0];
	zhenzhi.onblur=function(){
			var num003 = /^([\u4e00-\u9fa5]{2,10})$/;
			if (!num003.test(this.value)) 
				{
					yanzheng003.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng003.style.display = "none";
				}
				this.value = this.value;
	}
	// 所在（或毕业）学校
    var xuexiao = document.getElementById("xuexiao");
	var yanzheng004 = document.getElementsByClassName("yanzheng004")[0];
	xuexiao.onblur=function(){
			var num004 = /^([\u4e00-\u9fa5]{4,20})$/;
			if (!num004.test(this.value)) 
				{
					yanzheng004.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng004.style.display = "none";
				}
				this.value = this.value;
	}
	// 家庭住址
    var jiating = document.getElementById("jiating");
	var yanzheng07 = document.getElementsByClassName("yanzheng07")[0];
	jiating.onblur=function(){
			var num07 = /^([\u4e00-\u9fa5]{1,})$/;
			if (!num07.test(this.value)) 
				{
					yanzheng07.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng07.style.display = "none";
				}
				this.value = this.value;
	}
    // 户口所在街道
    var jiedao = document.getElementById("jiedao");
	var yanzheng08 = document.getElementsByClassName("yanzheng08")[0];
	jiedao.onblur=function(){
			var num08 = /^([0-9\u4e00-\u9fa5]{1,})$/;
			if (!num08.test(this.value)) 
				{
					yanzheng08.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng08.style.display = "none";
				}
				this.value = this.value;
	}
     // 邮件录取通知书地址
    var tongzhishu = document.getElementById("tongzhishu");
	var yanzheng10 = document.getElementsByClassName("yanzheng10")[0];
	tongzhishu.onblur=function(){
			var num10 = /^([0-9\u4e00-\u9fa5]{1,})$/;
			if (!num10.test(this.value)) 
				{
					yanzheng10.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng10.style.display = "none";
				}
				this.value = this.value;
	}
	   // 收件人
    var shoujianren = document.getElementById("shoujianren");
	var yanzheng11 = document.getElementsByClassName("yanzheng11")[0];
	shoujianren.onblur=function(){
			var num11 = /^([a-zA-Z\u4e00-\u9fa5\·]{2,10})$/;
			if (!num11.test(this.value)) 
				{
					yanzheng11.style.display = "block";
				}else{
					this.value = this.value;
					yanzheng11.style.display = "none";
				}
				this.value = this.value;
	}

	// 出生日期
	var bron_year = document.getElementById("bron_year");
	var bron_month = document.getElementById("bron_month");
	var bron_day = document.getElementById("bron_day");
	var bron_year_opt = bron_year.children;
	var bron_month_opt = bron_month.children;
	var bron_day_opt = bron_day.children;
	var yanzheng002 = document.getElementsByClassName("yanzheng002")[0];
        bron_year.onclick = function(){
		if (bron_year_opt[0].selected) 
			{
				yanzheng002.style.display = "block";
			}else{
				yanzheng002.style.display = "none";
				// console.log(bron_month_opt[1].selected);
				// bron_day_opt[1].selected;
			}
     }

}