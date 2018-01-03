module.exports = function (plop) {
    plop.setGenerator('gitbook', {
        description: 'gitbook is awesome',
        prompts: [
            {
            type: 'input',
            name: 'link',
            message: 'paste link to online stuff or type summary; enter to continue: \n'
        },
            {
            type: 'input',
            name: 'name',
            message: 'Your new article name: \n',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        },
            {
            type: 'confirm',
            name: 'draft',
            message: 'Is this still a Draft?'
        }],
        actions: function(data) {
            var actions = [];

            actions.push({
                type: 'add',
                path: 'articles/{{snakeCase name}}.md',
                templateFile: 'plop/article-template.md'
            });

            if(data.draft) {
                actions.push({
                    type: 'add',
                    path: 'plop/draft_{{snakeCase name}}.md',
                    templateFile: 'plop/summary-template.md'
                });
            } else {
                actions.push({
                    type: 'add',
                    path: 'plop/article_{{snakeCase name}}.md',
                    templateFile: 'plop/summary-template.md'
                });
            }

            return actions;
        }
    });
};
