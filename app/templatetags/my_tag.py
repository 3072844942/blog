from django import template

register = template.Library()


# @register.filter
# def add1(item):
#     return int(item) + 1

@register.inclusion_tag('my_tag/headers.html')
def banner(menu_name):
    img_list = [
        "/static/image/header/background1.jpg",
        "/static/image/header/background2.jpg",
    ]
    return { "img_list" : img_list }
