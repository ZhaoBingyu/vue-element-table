import Table from '../mixins/table';

export default {
    name: 'VeTable',
    mixins: [Table],
    computed: {
        curTableData() {
            if (this.paginationShow) {
                let totalPage = this.innerTotal / this.innerPageSize;
                let ceilTotalPage = Math.ceil(totalPage);
                if (this.innerCurrentPage > ceilTotalPage) {
                    console.warn(
                        `[ve-table]: currentPage ${
                            this.currentPage
                        } beyond total page ${ceilTotalPage} (data.length/pageSize,${this.innerTotal}/${
                            this.innerPageSize
                        }), set currentPage to totalPage: ${ceilTotalPage}`
                    );
                    this.innerCurrentPage = ceilTotalPage;
                }
                let from = this.innerPageSize * (this.innerCurrentPage - 1);
                let to = from + this.innerPageSize;
                return this.data.slice(from, to);
            }
            return this.data;
        },
        innerTotal() {
            return this.data.length;
        }
    }
};
