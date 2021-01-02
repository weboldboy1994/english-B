<template>
	<el-row
		class="infinite-list"
		v-infinite-scroll="load"
		style="overflow:auto"
	>
		<div
			v-for="(item,i) in subject"
			:key=i
			class="infinite-list-item"
		>
			<p>
				<span>{{i+1}}.</span>
				<span v-html="item.title"></span>
			</p>
			<p>
				<span>{{item.translate}}</span>
				<span>解释：{{item.explain}}</span>
			</p>
		</div>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				subject: [
					{
						title:
							"Professor smith promised to look <span class='active'>over</span>  my paper，that is，to read it carefully before the defence．",
						translate:
							"史密斯教授答应帮我看一下我的论文，也就是说，要在答辩前仔细看一下。",
						explain: ""
					},
					{
						title: "Our house is about a mile from the railway station and there are not many houses <span class='active'> in between</span>",
						translate: "我们家离火车站大概一英里左右，而且两者之间房子不多。",
						explain: ""
					},
					{
						title: "As the bus came round the corner，it ran <span class='active'>into</span> a big tree by the roadside.</span>",
						translate: "汽车开到转角时撞到了路边的一棵大树。",
						explain: ""
					},
					{
						title: "When Lily came home at 5 p.m. yesterday, her mother <span class='active'>was cooking</span> dinner in the kitchen. ",
						translate: "莉莉昨天五点钟回家时，她妈妈正在厨房里做晚饭。解释：was cooking 过去进行时",
						explain: ""
					},
					{
						title: "Did you notice the guy <span class='active'>whose</span> head looked like a big potato?",
						translate: "你注意到了那个脑袋看上去像个大土豆的家伙了吗？",
						explain: ""
					},
					{
						title: "I don’t know the park, but it’s <span class='active'>said</span> to be quite beautiful.",
						translate: "我不了解这公园，但据说很美。",
						explain: ""
					},
					{
						title: "Mike is better than Peter <span class='active'>at</span> swimming.",
						translate: "Mike 比 Peter 更擅长游泳。",
						explain: ""
					},
					{
						title: "The young lady coming over to us <span class='active'>must be</span> our English teacher; the way she walks tells us that! <",
						translate: "那个正朝我们走来的年轻女子肯定是我们的英语老师；她走路的样子就告诉我们了。",
						explain: ""
					},
					{
						title: "Had you come five minutes earlier, you <span class='active'>would have caught</span> the train to Birmingham. But now you missed it. ",
						translate: "要是你早来五分钟，你就能赶上那班去伯明翰的火车了。但现在你错过了。 解释：would have + 动词的过去分词表示本应做某事",
						explain: ""
					},
					{
						title: "Eggs, though rich in nourishments, have <span class='active'>a large amount</span> of fat.",
						translate: "尽管鸡蛋营养丰富，但它含有大量的脂肪。",
						explain: ""
					},
					{
						title: "The atmosphere <span class='active'>consists of</span> certain gases mixed together in definite proportions．",
						translate: "大气是由多种气体以一定的比例混合而成的。",
						explain: ""
					},
					{
						title: "Neither John <span class='active'>nor</span> his father was able to wake up early enough to catch the morning train．",
						translate: "约翰和他父亲都没能早点起来赶上早班火车",
						explain: " Neither...nor... 两者都不，均不"
					},
					{
						title: "The girl is <span class='active'>something</span> of a film star．",
						translate: "这个女孩有点像一位电影明星。",
						explain: ""
					},
					{
						title: "Jane’s dress is similar in design <span class='active'>to</span> her sister’s．",
						translate: "简的裙子和她妹妹的在设计上很相似。",
						explain: "be similar to 与...相似"
					},
					{
						title: "His salary as a driver is much higher than <span class='active'>that of a porter</span>．",
						translate: "他当司机的薪水比当搬运工的薪水要高的多",
						explain: "前后比较的是收入，并不是人之间的比较，所以用that替代salary， that of a porter 服务员的薪水"
					},
					{
						title: "It’s time we <span class='active'>Started</span> the lecture because everybody has arrived．",
						translate: "大家都到了，我们该开始讲课了。",
						explain: ""
					},
					{
						title: "<span class='active'>Besides</span> these honors he received a sum of money",
						translate: "除了这些荣誉外，他还得到了一笔钱。",
						explain: ""
					},
					{
						title: "Would you let <span class='active'>me go</span> to the park with my classmate，Mum?",
						translate: "妈妈，让我和同学一起去公园好吗。",
						explain: ""
					},
					{
						title: "Therefore, other things <span class='active'>being</span> equal, the member of workers that employers want decreases.",
						translate: "因此，其他方面都平等，但雇主需要的工人减少了。",
						explain: ""
					},
					{
						title: "I have been looking forward to <span class='active'>Hearing</span> from my parents. ",
						translate: "我一直盼望着收到父母的来信。",
						explain: "固定搭配来的,look forworad to 后面接动词的ing形式111"
					},

					{
						title: "The manager will not  <span class='active'>Allow</span>   us to use his car．",
						translate: "经理不准我们用他的车。",
						explain: ""
					},
					{
						title: " <span class='active'>Watch</span> her and then try to copy what she does．",
						translate: "留心观察，然后照她的样子做。",
						explain: "观察她的动作，然后跟着做。"
					},
					{
						title: "Will you <span class='active'>do</span> me a favor，please?",
						translate: "你愿意帮我个忙吗？",
						explain: "do somebody a favor“帮助某人”。"
					},
                    {
                        title: "It’s bad  <span class='active'>allowed</span> for you to smoke in the public places where smoking is not ",
                        translate: "说在禁止吸烟的公共场所吸烟是一个坏的举止行为。",
                        explain: ""
                    },
                    {
                        title: "—It’s a good idea．But who’s going to <span class='active'>carry out</span> the plan? " +
                        " I think John and Peter will． ",
                        translate: "这是个好主意。但谁去执行这个计划呢？\n" +
                        "我认为约翰和比德可以去执行这个计划。",
                        explain: "去执行, to carry out"
                    },
                    {
                        title: "Two days is not enough for him to finish the work．He needs <span class='active'>a third</span> day．",
                        translate: "两天时间他完成不了这项工作，还需要一天。",
                        explain: "选a third day. a是泛指，这里并不是特指第三天，所以不用the，而用a。泛指额外的一天。"
                    },
                    {
                        title: "The red flower goes from one to  <span class='active'>another</span> in the class．",
                        translate: "教室里，红花从一个人传到另一个人。",
                        explain: ""
                    },
                    {
                        title: "The computer system   <span class='active'>broke down</span> suddenly while he was searching for information on the\n" +
                        "Internet．",
                        translate: "在他上网查找资料的时候计算机系统突然瘫痪。",
                        explain: ""
                    },
                    {
                        title: "There’s lots of fruit   <span class='active'>On</span> the tree．Our little cat is also in the tree．",
                        translate: "树上长了许多果实。我们的小猫也在树上。",
                        explain: ""
                    },
                    {
                        title: "How can he   <span class='active'>hear</span> if he is not  <span class='active'>listening</span>?",
                        translate: "他不听怎么能听到呢？",
                        explain: "01.listen做及物bai动词时，表示有意识地听、仔细du听,强调的是听的动作。\n" +
                        "\n" +
                        "listen用作zhi不及物动词,后面需dao要加上介词to才能接人或物作宾语。" +
                        "02.hear可用作及物动词。\n" +
                        "\n" +
                        "也可用作不及物动词,意为“听见、听到”,但不一定是有意识地,强调听的结果。"
                    },
                    {
                        title: "The students were all entertained in a Mexican restaurant, at Professor Brian’s <span class='active'>expense</span>． ",
                        translate: "布朗教授在一家墨西哥餐厅请学生吃饭。",
                        explain: "at sb's expense\n" +
                        "由某人承担费用"
                    },
                    {
                        title: "Tom, what did you do with my documents? I have never seen such a <span class='active'>mess</span> and disorder．",
                        translate: "汤姆，你拿你的文件在干什么？我从来没见到这么乱过。",
                        explain: ""
                    },
                    {
                        title: "If she wants to stay thin, she must make a  <span class='active'>change</span> in her diet．",
                        translate: "如果她想保持身材苗条，就必须在饮食有所改变。",
                        explain: ""
                    },
                    {
                        title: " <span class='active'>Before</span> the War of Independence, the United States was an English colony．",
                        translate: "在独立战争以前，美国时英国的一个殖民地。",
                        explain: ""
                    },
                    {
                        title: "No matter  <span class='active'>how hard it was snowing</span>, the little sisters managed to round the sheep up and drive them back home safely．",
                        translate: "不管雪下的多大，两个小姐妹还是安全地把羊拢起来赶回了家。",
                        explain: ""
                    },
                    {
                        title: "A police officer claimed that he had attempted to  <span class='active'>avoid</span> paying his fare. ",
                        translate: "警官说这个年轻人试图拒付费用。",
                        explain: ""
                    },
                    {
                        title: "While I was in the university, I learned taking a photo, <span class='active'>which</span> is very useful now for me. ",
                        translate: "我在大学里学会了照相，现在对我很有用。",
                        explain: "which引导的定语从句，指代I learned taking a photo这件事。\n" +
                        "\n" +
                        "当关系代词指代整个句子时都是非限制性定语从句,定语从句前要加逗号,表示“事”或“物”关系代词可以用which。"
                    },
                    {
                        title: "This kind of material expands  <span class='active'>with</span> the temperature increasing. ",
                        translate: "这种材料随温度的提高而膨胀。",
                        explain: ""
                    },
                    {
                        title: "People at the party worried about him because no one was aware <span class='active'>of where</span> he had gone. ",
                        translate: "晚会上的人都为他担忧，因为没人知道他去哪儿了。",
                        explain: ""
                    },
                    {
                        title: "A sudden noise of a fire-engine made him  <span class='active'>hurry</span> to the door.",
                        translate: "火警的突然响起使他匆忙走到门口。",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
                    {
                        title: "",
                        translate: "",
                        explain: ""
                    },
				]
			};
		},
		methods: {
			load() {}
		}
	};
</script>
<style scoped>
	.infinite-list > div {
		height: 100px;
		background: #e8f3fe;
		margin: 30px;
	}
	.active {
		color: red;
	}
</style>
