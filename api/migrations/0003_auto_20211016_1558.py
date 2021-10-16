# Generated by Django 3.2.8 on 2021-10-16 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_uset_created'),
    ]

    operations = [
        migrations.CreateModel(
            name='Owner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=50)),
                ('create', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['create'],
            },
        ),
        migrations.DeleteModel(
            name='Uset',
        ),
    ]